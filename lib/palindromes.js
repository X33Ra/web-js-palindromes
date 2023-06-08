// should return true if a phrase is a palindrome
const isPalindrome = function(str) {
  // Remove spaces and convert to lowercase
  const normalizedStr = str.replace(/\s/g, "").toLowerCase();
  
  // Check if the normalized string is equal to its reverse
  return normalizedStr === normalizedStr.split("").reverse().join("");
};

module.exports = isPalindrome;




