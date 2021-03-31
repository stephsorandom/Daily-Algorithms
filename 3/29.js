Find the smallest integer in the array
Given an array of integers your solution should find the smallest integer.

EX:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345



         //Using sort method!
//return the smallest integer from an array
//loop through array
//somehow sort the array, smallest to largest
//grab the smallest integer
class SmallestIntegerFinder{ 
    findSmallestInt(args) {
        args.sort((a, b) => a - b) //sort -> automatically sorts by ascending order
        return args[0]
     }
   }