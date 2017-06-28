class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(mail: params[:session][:mail].downcase)
    if @user && @user.authenticate(params[:session][:password])
      log_in @user
      redirect_to edit_user_path(@user.id)
    else
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to root_path
  end
end
