const maxProdSubArray = (nums) => {
  let max = nums[0];
  let min = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // update max dependind on 3 possible cases
      // 1. number(+) it self is the largest
      // 2. number(+) * max(+) is the largest
      // 3. number(-) * min(-) is the largest 
    curMax = Math.max(nums[i], nums[i] * max, nums[i] * min);
    // update min dependind on 3 possible cases
      // 1. number(-) it self is the smallest
      // 2. number(-) * max(+) is the smallest
      // 3. number(-) * min(-) is the smallest
    curMin = Math.min(nums[i], nums[i] * max, nums[i] * min);
    // update min and max with the min and max from this iteration (curMax and curMin)
    max = curMax;
    min = curMin;
    // update result
    result = Math.max(result, max);
  }

  return result;
};

module.exports = maxProdSubArray;