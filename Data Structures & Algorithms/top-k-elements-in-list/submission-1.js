class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map()

        for(let num of nums){
            freqMap.set(num, (freqMap.get(num) || 0) + 1)
        }

        let buckets = Array(nums.length+1).fill().map(() => [])

        for(let [num, freq] of freqMap){
            buckets[freq].push(num)
        }

        let result = []

        for(let i = buckets.length - 1; i >= 0 && result.length < k; i--){
            for(let num of buckets[i]){
                result.push(num)
                if(result.length === k) break
            }
        }

        return result
    }
}
