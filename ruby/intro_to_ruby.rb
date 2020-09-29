# Introduction to Ruby

=begin
Data types
- Integer
- Float
- String
- Boolean

Equality Operators
Relational Operators
Logical Operator

Declaring variables
String methods
String iterpolation
Declaring arrays
Array methods
Shovel operator
=end

my_nums = [2, 3, 4, 5]
# puts my_nums
# print my_nums
# p my_nums

# Ruby Conditionals

# if/end

answer = 9

if answer > 10
  'greater than 10'
end

# if/else/end

if answer > 10
  'greater than 10'
else
  'less than 10'
end

# if/elsif/else/end

if answer == 10
  'the answer is 10'
elsif answer > 10
  'greater than 10'
else
  'less than 10'
end

p "Input a number:"
my_answer = gets.chomp

if my_answer.to_i < 100
  p 'less than 100'
else
  p 'greater than 100'
end
