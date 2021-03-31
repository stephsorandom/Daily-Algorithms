Exclamation marks series #1: Remove a exclamation mark from the end of string

Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"


function remove(s){
 if(s[s.length-1] == '!'){
   return s.split('').slice(0,s.split('').length-1).join('');
  } else {
 return s;
  }
}