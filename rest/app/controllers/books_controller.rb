class BooksController < ApplicationController

  def index
    render json: {
      pageNumber: page_number,
      records: books
    }
  end

  private

  def books
    Book.page( page_number ).per( page_size )
  end

  def page_number
    params[:page].nil? ? 1 : params[:page].to_i
  end

  def page_size
    params[:size].nil? ? 100 : params[:size].to_i
  end

end
