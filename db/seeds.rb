100.times do
  Product.create(
    name: Faker::Commerce.product_name,
    price: Faker::Commerce.price.to_f,
    description: Faker::Lorem.sentence,
  )
end
