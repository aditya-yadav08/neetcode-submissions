class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {

        let count = [0,0,0]

        for(let num of nums){
            count[num]++;
        }

        let index = 0

        for(let color = 0; color < 3; color++){
            while(count[color] > 0){
                nums[index++] = color
                count[color]--
            }
        }
    }
}
