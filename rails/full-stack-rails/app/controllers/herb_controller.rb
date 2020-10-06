class HerbController < ApplicationController

  # index
  def index
    @herbs = Herb.all
  end

  #show
  def show
    @herb = Herb.find(params[:id])
  end

  def new
  end

  def create
    @herb = Herb.create(
      name: params[:name],
      is_watered: params[:is_watered]
    )
    if @herb.valid?
      redirect_to herbs_path
    else
      redirect_to new_herb_path
    end
  end

end
