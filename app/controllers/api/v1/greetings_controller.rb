class Api::V1::GreetingsController < ApplicationController
  def index
    @messages = Greeting.all
    render json: @messages, status: :ok
  end

  def show
    @message = Greeting.random.first
    render json: @message
  end
end
