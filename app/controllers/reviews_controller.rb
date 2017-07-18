class ReviewsController < ApplicationController
  before_action :logged_in_user
  def new
    @recipe = Recipe.find(params[:recipe_id])
    @review = Review.new
  end
end
