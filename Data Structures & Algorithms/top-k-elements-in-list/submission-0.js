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

        let buckets = Array(nums.length + 1).fill().map(() => [])

        for(let [num, freq] of freqMap){
            buckets[freq].push(num)
        }

        let results = []

        for(let i = buckets.length - 1; i >= 0 && results.length < k; i--){
            for(let num of buckets[i]){
            results.push(num)
            if (results.length === k) break
         }
        }

        return results
    }
}
