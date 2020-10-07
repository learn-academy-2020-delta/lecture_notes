class HerbController < ApplicationController

  # index - see all
  def index
    @herbs = Herb.all
  end

  # show - see one by id
  def show
    @herb = Herb.find(params[:id])
  end

  # new - form
  def new
  end

  # post/create - submit a form
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

  # delete
  def destroy
    @herb = Herb.find(params[:id])
    if @herb.destroy
      redirect_to herbs_path
    else
      redirect_to herb_path(@herb)
    end
  end

  # edit - form
  def edit
  end

  # update
  def update
    @herb = Herb.find(params[:id])
    @herb.update(
      name: params[:name],
      is_watered: params[:is_watered]
    )
    if @herb.valid?
      redirect_to herb_path(@herb)
    else
      redirect_to herbs_path
    end
  end

end
