10000.times do
    Book.create! do |b|
        b.author = Faker::Book.author
        b.genre = Faker::Book.genre
        b.title = Faker::Book.title
    end
end