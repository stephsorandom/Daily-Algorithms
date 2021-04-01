8kyu - Counting Sheep

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

EX:
var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
    
Test.expect(countSheeps(array1) == 17, "There are 17 sheeps in total")


function countSheeps (arrayOfSheep) {
    let sheepCounter = 0;
    for(let i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]=== true) {
        sheepCounter++;
      }
    }
    return sheepCounter;
}