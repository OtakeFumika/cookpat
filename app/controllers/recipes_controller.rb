class RecipesController < ApplicationController
  before_action :logged_in_user, only:[:new, :create, :edit, :update, :destory]
  def index
  end

  def new
    @user = User.find(current_user.id)
    @recipe = Recipe.new
    4.times{@recipe.steps.build}
    3.times{@recipe.ingredients.build}
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      redirect_to root_path, notice:  'レシピを作成しました'
    else
      render :new
    end
  end

  def edit
    @user = User.find(current_user.id)
    @recipe = Recipe.find(params[:id])
    @recipe_images = @recipe.steps
  end

  def update
    @recipe = Recipe.find(params[:id])
    if @recipe.update(recipe_params)
      redirect_to root_path, notice: 'レシピを更新しました'
    else
      render :edit
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def destroy
    recipe = Recipe.find(params[:id])
    if current_user.id == recipe.user_id
      binding.pry
      recipe.destroy
      redirect_to controller: :users, action: :show
    else
      render :edit
    end
  end

  def search
    text = "%#{params[:text]}%"
    use = "%#{params[:use]}%"
    @recipes = []
    @recipes << Recipe.joins(:ingredients).where("ingredients.name Like(?)", "%#{params[:text]}%") if params[:text] != ""
    @recipes << Recipe.where("name like ? and (catch_copy like ? or history like ?)", text, use, use)
    @recipes.flatten!.uniq!
  end

  private

  def recipe_params
    params.require(:recipe).permit(:id, :name, :dish_image, :catch_copy, :tip, :history, ingredients_attributes: [:id, :name, :quantity, :_destroy], steps_attributes: [:id, :step_image, :how_to, :_destroy]).merge(user_id: current_user.id)
  end

end
