class PagesController < ApplicationController
  def index
    @count = session[:count].to_i
    @color = "red"
  end
end
