---
sidebar_position: 1
---

# Majority Element

**[169. Majority Element](https://leetcode.com/problems/majority-element/)**

Solution:
 - Iterate through nums counting the frequency of values in nums by storing the in a dictionary.
 - Sort the dictionary by frequency then reverse to get frequency to highest to lowest
 - Type cast to list (which drops values and only retains keys) but will still remain sorted
 - Return the first instance in the list which is the higest frequncy instance in nums
    - There is always at least one element in nums so we don't need to account for if nums is empty

```python title="Output: 5"
class Solution:
    def majorityElement(self, nums):
        dictionary = {}

        for i, value in enumerate(nums):
            if value in dictionary:
                dictionary[value] += 1
            else:
                dictionary[value] = 1
        
        result = {key: val for key, val in sorted(dictionary.items(), key = lambda x: x[1], reverse=True)}

        return list(result)[0]

nums = [6,5,5]
# nums = [2,2,1,1,1,2,2]

p1 = Solution()
print(p1.majorityElement(nums))
```
