---
sidebar_position: 4
---

# Koko Eating Bananas

**[875. Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)**

Solution:
 - Brute force is linearily checking from 1 to max(nums) to see which amount is valid given the hours constraint
 - Binary search implmentation to make it faster
  - 'right = mid' instead of 'right = mid - 1' because we want to include mid as the possible output

```python title="Output: 4.  3 takes too many hours to eat and 5->8 are valid but aren't minimum"
import math

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        left = 1
        right = max(piles)

        while(left < right):
            mid = (left+right)//2

            if self.possible(mid, piles, h):
                right = mid
            else:
                left = mid + 1
            
        return left
    
    def possible(self, mid, piles, h):
        count = 0

        for p in piles:
            count += math.ceil(p/mid)
        
        return count <= h

piles = [3,6,7,11]
h = 8

p1 = Solution()
print(p1.minEatingSpeed(piles, h))
```