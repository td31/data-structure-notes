---
sidebar_position: 2
---

# Max Consecutive Ones III

**[1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)**

```python title="Output: 6"
class Solution():
    def longestSubOnes(self, nums, k):
        longest, max_freq, l = 0, 0, 0

        for r, val in enumerate(nums):
            while max_freq == k and val == 0:
                longest = max(longest, r-l)

                if nums[l] == 0:
                    max_freq -= 1

                l += 1

            if val == 0:
                max_freq += 1

            longest = max(longest, r-l+1)

        return longest

nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
k = 2

p1 = Solution()
print(p1.longestSubOnes(nums, k))
```