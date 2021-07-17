---
sidebar_position: 3
---

# Subsets

**[78.  Subsets](https://leetcode.com/problems/subsets/)**

Solution:
 - Similar to other backtracking problems
 - As we build the subset each iteration we slice as we build

```python title="Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"
class Solution:
    def subsets(self, nums):
        output = []
        self.build(nums, [], output)
        return output

    def build(self, nums, path, output):
        output.append(path)
        for i in range(len(nums)):
            self.build(nums[i+1:], path+[nums[i]], output)
            # nums[i+1:] slices the first value in nums
            # path+[nums[i]] == path = path.extend(nums[i])

nums = [1, 2, 3]

p1 = Solution()
print(p1.subsets(nums))
```
