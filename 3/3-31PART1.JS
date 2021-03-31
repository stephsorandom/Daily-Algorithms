// 8 kyu - Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// EXAMPLES: 
// Test.assertEquals(removeChar('eloquent'), 'loquen');
// Test.assertEquals(removeChar('country'), 'ountr');
// Test.assertEquals(removeChar('person'), 'erso');
// Test.assertEquals(removeChar('place'), 'lac');



function removeChar(str){
    // String
    // remove First & Last character
    //tried substr & substring....
return str.substring(1,str.length-1)
};
   