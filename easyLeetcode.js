5/18  
How Many Numbers Are Smaller Than the Current Number


Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).


//how many numbers in the nums array are smaller than the current value?
//Input: nums = [6,5,4,8]   =>  Output: [2,1,0,3]

//Input: nums = [8,1,2,2,3]    =>   Output: [4,0,1,1,3]


//loop through array, grabbing each index and comparing it to the rest of the array
//if there are other numbers less than my index, add the sum of them and show that number in new array



var smallerNumbersThanCurrent = function(nums) {
    let output = []
  for (let i=0; i< nums.length; i++) {  //loops through array
    if (nums[i] < nums[j]) {  //if statment => going through index and comparing if less than
            //needs to add it to my 'output' array if smaller
            //and add all the nubmers together for a final number....
    }
  }
  return output
};





