require 'rspec'
require_relative 'book'
require_relative 'library'

describe Book do

    it 'has to be real' do
        expect{Book.new}.to_not raise_error
    end

    it 'has a title' do
        my_book = Book.new
        my_book.title = 'Hitchhikers guide to the galaxy'
        expect(my_book.title).to be_a String
        expect(my_book.title).to eq 'Hitchhikers guide to the galaxy'
    end

    it 'has an author' do
        my_book = Book.new
        expect(my_book.author).to eq 'Anonymous'
        expect(my_book.author).to be_a String
        hitchhikers = Book.new 'Douglas Adams'
        expect(hitchhikers.author).to eq 'Douglas Adams'
    end

    it 'can report the current page' do
        my_book = Book.new
        expect(my_book.page).to eq 1
        expect(my_book.page).to be_a Integer
    end

    it 'can read pages' do
        my_book = Book.new
        expect{my_book.read 10}.to change {my_book.page}.to(11)
    end

end

describe Library do

    it 'must exist' do
        expect{Library.new}.to_not raise_error
    end

    it 'has an array of books' do
        my_book = Book.new
        my_library = Library.new
        expect(my_library.book_collection).to be_a Array
        my_library.add_books my_book
        expect(my_library.book_collection).not_to be_empty
    end

end

# -to

# -not_to

# -be_a

# -be_empty

# -raise_errors

# -eq

# -change

# -from()

# -.to()