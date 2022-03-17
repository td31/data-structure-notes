---
sidebar_position: 31
---

# Merge Intervals

**[56. Merge Intervals](https://leetcode.com/problems/merge-intervals/)**

```python title="Output: [[1, 6], [7, 9]]"
class Solution():
    def mergeIntervals(self, nums):
        output = []
        nums.sort()

        curr = nums[0]

        for i in range(1, len(nums)):
            if curr[-1] >= nums[i][0]:
                upper = max(nums[i][-1], curr[-1])
                curr = [curr[0], upper]
            else:
                output.append(curr)
                curr = nums[i]

        output.append(curr)
        
        return output

nums = [[1,4], [2,5], [3,6], [7,9]]

p1 = Solution()
print(p1.mergeIntervals(nums))
```