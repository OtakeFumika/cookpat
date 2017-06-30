class RecipesController < ApplicationController
  before_action :logged_in_user, only:[:new, :create, :edit, :update, :destory]
  def index
  end

  def new
    @user = User.find(current_user.id)
  end

  def create
  end

  def edit
  end

  def update
  end

  def show
  end

  def destroy
  end
end
