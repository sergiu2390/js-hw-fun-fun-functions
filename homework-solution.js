// Question 1
// 1. local
// 2. yes
// 3. it logs "Aloha!"

// Question 2
// 1. global
// 2. yes
// 3. it logs 5

// Question 3
// 1. local
// 2. out of scope
// 3. no
// 4. it logs "snap pea"
// 5. it throws an error

// Question 4
// 1. global
// 2. global
// 3. it logs "Superman"
// 4. it logs "Batman"
// 5. no

// Question 5
// 1. global (any variable that has not been declared is automatically global even if the value is assigned inside a function)
// 2. it logs "beep"
// 3. function declaration
// 4. it throws an error "makeNoise is not a function"
// 5. it logs "beep"
// 6. it logs "beep" "beep"
// 7. it logs "beep" "beep"

// Question 6

var sumOfNums = function(numsArray) {
  var sum = 0;
  for (var i = 0; i < numsArray.length; i++) {
    sum += numsArray[i];
  }
  return sum;
  //// alternatively, using Array methods
  // return numsArray.reduce(function(a, b){ return a + b; });
};

// Question 7

var numsGreaterThanTen = function(numsArray){
  var results = [];
  for (var i = 0; i < numsArray.length; i++) {
    if (numsArray[i] > 10) {
      results.push(numsArray[i]);
    }
  }
  return results;
  //// alternatively, using Array methods
  // return numsArray.filter(function(num){ return num > 10; });
};

// Question 8

var allStartingWithA = function(words) {
  for (var i = 0; i < words.length; i++) {
    if (!(words[i].slice(0, 1) === 'a' || words[i].slice(0, 1) === 'A')) {
      /// equivalently, `if (words[i].slice(0,1) !== 'a' && words[i].slice(0,1) !== 'a' )`
      /// You could also write `if (!words[i].toLowerCase().startsWith('a')) { ... }`
      return false;
    }
  }
  return true;
  //// alternatively, using Array methods
  // return words.every(function(word){
  //   return words[i].slice(0,1) === 'a' || words[i].slice(0,1) === 'A';
  // });
};

// Question 9
var hasAtLeastNVowels = function(word, n) {
  if (n < 0) {
    return null;
  }
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) === 'a' || word.charAt(i) === 'A' ||
      word.charAt(i) === 'e' || word.charAt(i) === 'E' ||
      word.charAt(i) === 'i' || word.charAt(i) === 'I' ||
      word.charAt(i) === 'o' || word.charAt(i) === 'O' ||
      word.charAt(i) === 'u' || word.charAt(i) === 'U'
    ) {
      count++;
    }
  }
  return count >= n;
  //// using a combination of array methods and regular expressions
  // return word.match(/[aeiouAEIOU]/).length >= n;
};

// Question 10
var buildObjectFromWords = function(words) {
  var result = {};
  for (var i = 0; i < words.length; i++) {
    result[words[i]] = words[i].length;
  }
  return result;
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allStartingWithA: allStartingWithA,
  buildObjectFromWords: buildObjectFromWords,
  hasAtLeastNVowels: hasAtLeastNVowels
}
