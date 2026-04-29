class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if(nums.length <= 1) return nums

        let mid = Math.floor(nums.length / 2)

        let left = this.sortArray(nums.slice(0,mid))
        let right = this.sortArray(nums.slice(mid))

        return this.merge(left, right)
    }

    merge(left, right){
        let res = []
        let i=0, j=0

        while(i<left.length && j<right.length){
            if(left[i] < right[j]){
                res.push(left[i++])
            }else{
                res.push(right[j++])
            }
        }

        return res.concat(left.slice(i)).concat(right.slice(j))
    }
}
