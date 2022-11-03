Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

INPUT         | OUTPUT   |  EXPLANATION 
[1,3]         | 3        | [1,3]
[1,3,-5]      | 3        | [1,3]
[1,-3,-5]     | 15       | [-3,-5] has the largest product 15.
[2,3,-2,4]    | 6        | [2,3] has the largest product 6.
[-2,0,-1]     | 0        | The result cannot be 2, because [-2,-1] is not a subarray. 
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

The intuition is that we store the information about our previous maximum product, and as we iterate through the array, we keep using our previous maximum to calculate the new maximum product.
The tricky part of this problem is that negative numbers exist in the input array. This causes situations where the smallest previous product (a negative number) can become the largest product if the next number in line is also a negative number.
Since the minimum product may have a chance to become the maximum, we need to store the information about the previous minimum as well and take it into account when we are calculating our maximum product.