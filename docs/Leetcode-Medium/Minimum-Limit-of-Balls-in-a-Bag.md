---
sidebar_position: 20
---

# Minimum Limit of Balls in a Bag

**[1760. Minimum Limit of Balls in a Bag](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/)**

Solution:
 - Almost the same as Koko Bananas question
 - Brute force is linearily checking from 1 to max(nums)
 - Binary search implmentation to make it faster
  - math.ceil(num/mid) - 1 is '- 1' because you need to account for where the splits have no remainder

```python title="Output: 3.  Looks like [3,3,3]"
import math

class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        left = 1
        right = max(nums)

        while(left < right):
            mid = (left+right)//2

            if self.possible(mid, nums, maxOperations):
                right = mid
            else:
                left = mid + 1

        return left

    def possible(self, mid, nums, max):
        count = 0

        for num in nums:
            count += math.ceil(num/mid) - 1
            
        return count <= max

nums = [9]
maxOperations = 2

p1 = Solution()
print(p1.minimumSize(nums, maxOperations))
```