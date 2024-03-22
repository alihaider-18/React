// Count Vowels in a String: Write a JavaScript function that counts the number
// of vowels in a given string.

function countVowels(str){
    const strLower = str.toLowerCase();
    let numOfVowels = 0;
    for (let char of strLower){
      if ('aeiou'.includes(char)){
        numOfVowels++;
      }
    }
  
    return numOfVowels;
  }
  
  str = 'Hello World';
  console.log("Original String : ",str)
  console.log("Number of Vowels : ",countVowels(str)); // output : 3