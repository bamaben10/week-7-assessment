// 1. Sum zero

function addToZero(numArray) { 
  let add = 0;
  for (let i = 0; i < numArray.length; i++) {
    let addIndex = numArray[i];
    add += addIndex;
  } 
  return true;
}



console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True


// 2) Unique Characters
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

console.log(hasUniqueChars("Monday")); 
console.log(hasUniqueChars("Moonday"));


// 3) Pangram Sentence

function isPangram(allLetters){
  for(let i = 0; i < allLetters.length; i++)
  if()
}

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False


// 4) Longest Word

function findLongestWord(arr){
  let longestWord = longestWord.length
  for(let i = 0; i < arr.length; i++)
  return longestWord.length
}

findLongestWord(["hi", "hello"]);
// -> 5