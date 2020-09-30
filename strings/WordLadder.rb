=begin 
example: hit, cog
hit => hot => dot => dog => cog
dictionary: [hot, dot, lot, dog, fog]
return 5 (minimum number of steps from A to B inclusive)
=end

def count_transforms(a, b, c)
  answer = {count: 0}
  
  while a.split() - b.split()
    transform(a, b, c, count)
    # add two to the end of this
  end

  answer.count # needs to be SMALLEST answer
end

def transform(a, b, c, count)
  # find a word in the dictionary that is one character closer to B from A
    # for each word in c, see if that word is one different from the starting word 
    # save every viable option at that fork in an "options" array for that stage
    # check the new word in the same way
      # increment count every time you progress
    # if you can't progress more, then go back to the "options" array
      # decrement by count by one and change the word to the first element in "options" and shift it out
    # keep checking. if you can't progress more, repeat
    # stop when word === b or when there are no options
end

puts transform("hit", "cog", ["hot", "dot", "lot", "dog", "fog"])