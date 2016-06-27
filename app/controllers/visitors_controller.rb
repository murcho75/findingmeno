class VisitorsController < ApplicationController

  def new
    @visitor = Visitor.new
  end

  def create
    @visitor = Visitor.new(secure_params)
    if @visitor.valid?
      @visitor.subscribe
      UserMailer.visitor_email(@visitor).deliver_now
      flash[:success] = "Thank you. Your travelling story has been sent"
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def secure_params
    params.require(:visitor).permit(:name, :email, :content)
  end

end
