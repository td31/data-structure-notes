---
sidebar_position: 6
---

# Top K Frequent Elements

**[347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)**

Solution:
 - Iterate through nums and track frequency of elements using a dictionary
 - Sort dictionary by items (x: x[1]).  Reverse to order from highest to lowest
 - Typecast to list and slice kth elements are return
    - Typecasting a dictionary to a list drops the keys and concatinates the values which works for us in this case

```python
class Solution:
    def topKFrequent(self, nums, k):
        if len(nums) == 1
            return nums
        
        dict = {}

        for i, value in enumerate(nums:
            if value not in dict:
                dict[value] = 1
            else:
                dict[value] += 1
            
        res = {key: val for key, val in sorted(dict.items(), key = lambda x: x[1], reverse=True)}

        return list(res)[:k]


nums = [1,1,1,2,2,3]
k = 2

p1 = Solution()
print(p1.topKFrequent(nums, k))
```