
function frequencyCounter(arr) {
  return arr.reduce(function(acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}


function findMode(arr){
  let freqCounter = frequencyCounter(arr);
  let count = 0;
  let mostFrequent;

  for (let num in freqCounter) {
      if (freqCounter[num] > count) { 
          mostFrequent = num;
          count = freqCounter[num]; 
      }
  }
  return parseInt(mostFrequent); 
}


  function validateNums(nums) {
    let result = [];
  
    for (let i = 0; i < nums.length; i++) {
      let valNums = Number(nums[i]);
  
      if (Number.isNaN(valNums)) {
        return new Error(
          `The value '${nums[i]}' at index ${i} is not a valid number.`
        );
      }
      result.push(valNums);
    }
    return result;
  }


  function findMean(nums) {
    if (nums.length === 0) {
      return 0;
    } else {
      return nums.reduce(function (acc, next) {
        return acc + next;
      }) / nums.length;
    }
  }
  

  
  function findMedian(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });

    let middleIdx = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middleIdx] + nums[middleIdx - 1]) / 2;
    } else {
        median = nums[middleIdx];
    }

    return median;
}


  module.exports = {
    frequencyCounter,
    findMean,
    findMedian,
    findMode,
    validateNums
  };
  