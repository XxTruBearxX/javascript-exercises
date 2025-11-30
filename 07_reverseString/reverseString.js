const reverseString = function(word) {
  // Convert the string into an array of characters
  const chararray = word.split('');
  // Reverse the array of characters
  const reversedArray = chararray.reverse();
  // Join the reversed array back into a string
  const answer = reversedArray.join('');
  return answer;

};

// Do not edit below this line
module.exports = reverseString;
