---
sidebar_position: 29
---

# Sort Colors

**[75. Sort Colors](https://leetcode.com/problems/sort-colors/)**

Solution:
 - Two pass solution still O(N) / O(1) however

```python title="Output: [0,0,1,1,2,2]"
class Solution():
    def flag(self, nums):
        count2 = 0
        for i in range(len(nums)-1, -1, -1):
            if nums[i] == 2:
                count2 += 1
                nums.append(nums.pop(i))

        end = len(nums) - 1 - count2
        for i in range(len(nums)-1, -1, -1):
            if nums[i] == 1:
                nums.insert(end, nums.pop(i))

        return nums

nums = [2,0,2,1,1,0]

p1 = Solution()
print(p1.flag(nums))
```