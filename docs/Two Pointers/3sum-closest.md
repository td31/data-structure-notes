---
sidebar_position: 4 
---

# 3Sum Closest

**[16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/)**

```python title="Output: 4"
class Solution():
    def threeSumClosest(self, nums, target):
        if (len(nums) == 3):
            return sum(nums)

        nums.sort()
        closest = nums[0] + nums[1] + nums[2]

        for i in range(1, len(nums)):
            l, r = i + 1, len(nums) - 1
            while l < r:
                total = nums[i] + nums[l] + nums[r]

                if (abs(target-total) <= abs(target-closest)):
                    closest = total

                if abs(target-total) < 0:
                    l += 1
                else:
                    r -= 1

        return closest

nums = [-4,50,1,7,18,-12,3,9]
target = 4

p1 = Solution()
print(p1.threeSumClosest(nums, target)) 
```