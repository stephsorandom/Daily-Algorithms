5/20
Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

Examples

Input: "fun&!! time"
Output: time

Input: "I love dogs"
Output: love

function LongestWord(sen) { 

  //return the longest word....or first word if more words of same length
  //ignore special characters and such
  
    //it is a string. need to go through the whole string and find length of each word
   
    //or string -> array....find .length of each string in array. 
    //compare a to b....which is longer? => longest word
  
    // code goes here  
    // return sen; 
    let str = sen.split(' ') //string to array of strings...separates each word
    console.log(str)
    // str[1].length
    let word = 0
    for (let i=0; i < str.length; i++) { //starts loop at 0, loops through 
      if (word > str.length) {
        return word
      } else {
        return str.length
      }
    } 
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));


