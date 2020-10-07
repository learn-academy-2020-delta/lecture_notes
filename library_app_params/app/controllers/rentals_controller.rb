class RentalsController < ApplicationController
  def index
    @rentals = Rental.all
  end

  def new
    @rental = Rental.new
  end

  def create
    @rental = Rental.create(rental_params)
    if @rental.valid?
      redirect_to @rental
    else
      render html: "whoopsie"
    end
  end

  def show
    @rental = Rental.find(params[:id])
  end

  def edit
    @rental = Rental.find(params[:id])
  end

  def update
    @rental = Rental.find(params[:id])
    @rental.update(rental_params)
    if @rental.valid?
      redirect_to @rental
    else
      render html: "whoopsie"
    end
  end

  private
  def rental_params
    params.require(:rental).permit(:title, :date)
  end
end
