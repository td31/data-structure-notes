---
sidebar_position: 14
---

# Combination Sum

**[39. Combination Sum](https://leetcode.com/problems/combination-sum/)**

Solution:
 - Similar to other backtracking problems
 - We track the sum over every iteration not by adding up each iteration of nums[i] but by substracting from the target
    - target-nums[i]
    - If it doesn't equal 0 (instead if we get -1 or -2 etc.) then the total sum of our list path doesn't sum to the target

```python title="Output: [[2,2,3], [7]]
class Solution:
    def combinationSum(self, candidates, target):
        output = []
        candidates.sort()
        self.dfs(candidates, target, 0, [], output)
        return output

    def dfs(self, nums, target, index, path, output):
        if target < 0:
            return
        if target == 0:
            output.append(path)
            return
        for i in range(index, len(nums)):
            self.dfs(nums, target-nums[i], i, path+[nums[i]], output)

candidates = [2,3,6,7]
target = 7

p1 = Solution()
print(p1.combinationSum(candidates, target))
```
