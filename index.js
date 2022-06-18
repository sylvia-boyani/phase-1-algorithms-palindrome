function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = "";
  if (word.lenght === 0 || word.lenght === 1) return true;

  for (let i = word.lenght -1; i >= 0; i--){
    reverseWord += word[i];
  }
  return reverseWord === word;
}
  


/* 
  Add your pseudocode here

  Input word
  is word palindrom
  then print true
  else 
  print false
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
