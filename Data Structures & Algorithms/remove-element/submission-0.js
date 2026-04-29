class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let res = []

        for(let num of nums){
            if(num !== val){
                res.push(num)
            }
        }

        for(let i=0; i<res.length; i++){
            nums[i] = res[i]
        }

        return res.length
    }
}
