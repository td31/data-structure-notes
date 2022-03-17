---
sidebar_position: 3 
---

# 3Sum

**[15. 3Sum](https://leetcode.com/problems/3sum/)**

```python title="Output: [[-3,1,2],[-2,0,2],[-2,1,1],[-1,0,1]]"
class Solution():
    def threesum(self, nums):
        res = []
        nums.sort()

        for i, a in enumerate(nums):
            if i > 0 and a == nums[i - 1]:
                continue
            
            l, r = i + 1, len(nums) - 1
            while l < r:
                total = a + nums[l] + nums[r]
                if total > 0:
                    r -= 1
                elif total < 0:
                    l += 1
                else:
                    res.append([a, nums[l], nums[r]])
                    l += 1
                    while nums[l] == nums[l-1] and l < r:
                        l += 1

        return res

nums = [-3, 0, 1, 2, -1, 1, -2]

p1 = Solution()
print(p1.threesum(nums))
```