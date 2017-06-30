class RecipesController < ApplicationController
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
