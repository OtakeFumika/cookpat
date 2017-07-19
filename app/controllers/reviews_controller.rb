class ReviewsController < ApplicationController
  before_action :logged_in_user
  def new
    @recipe = Recipe.find(params[:recipe_id])
    @review = Review.new
  end

  def create
    Review.create(create_params)
    redirect_to controller: :recipes, action: :index
  end

  private
  def create_params
    params.require(:review).permit(:rate, :review, :title).merge(recipe_id: params[:recipe_id], user_id: current_user.id)
  end
end
