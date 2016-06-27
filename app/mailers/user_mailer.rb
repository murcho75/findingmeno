class UserMailer < ApplicationMailer
  default from: "do-not-reply@example.com"

  def visitor_email(visitor)
    @visitor = visitor
    mail(to: Rails.application.secrets.owner_email, from: @visitor.email, :subject => "New travelling story")
  end
end
