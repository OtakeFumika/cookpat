class UsersController < ApplicationController
  before_action :logged_in_user, only: [:edit, :update]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
    if  @user && @user.authenticate(params[:password])
      respond_to do |format|
        format.html
        format.json{ render json: @user}
      end
    end
  end

  def update
  end

  def show
    @user = User.find(params[:id])
    @recipes = @user.recipes
  end

  def mail_edit
    @user = User.find(params[:id])
  end

  def mail_update
    @user = User.find(params[:id])
    if @user.update(mail: user_params[:mail])
      redirect_to edit_user_path
    else
      render :mail_edit
    end
  end

  def password_edit
    @user = User.find(params[:id])
  end

  def password_update
    @user = User.find(params[:id])
    if @user.update(password: user_params[:password])
      redirect_to edit_user_path
    else
      render :password_edit
    end
  end

  def postnum_edit
    @user = User.find(params[:id])
  end

  def postnum_update
    @user = User.find(params[:id])
    if @user.update(postnum: user_params[:postnum])
      redirect_to edit_user_path
    else
      render :postnum_edit
    end
  end

  def image_edit
    @user = User.find(params[:id])
  end

  def image_update
    @user = User.find(params[:id])
      if params[:user]
      @user.update(image: user_params[:image])
      redirect_to edit_user_path
    else
      render :image_edit
    end
  end

  def name_edit
    @user = User.find(params[:id])
  end

  def name_update
      @user = User.find(params[:id])
      if @user.update(name: user_params[:name])
      redirect_to edit_user_path
    else
      render :name_edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :mail, :postnum, :birthday, :sex, :password, :password_confirmation, :birth_year, :birth_month, :image)
  end
end
