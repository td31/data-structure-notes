---
sidebar_position: 1
---

# Find Peak Element

**[162. Find Peak Element](https://leetcode.com/problems/find-peak-element/)**

Solution:
 - Modified binary search
 - Use of 'while (left < right)' instead of 'while(left <= right)' is deliberate choice in order to avoid index out of bounds errors

```python title="Output is index in nums of any instance of a peak.  Example used has peak's at indexes 1 or 5"

class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 0
        
        if len(nums) == 2:
            if nums[0] > nums[1]:
                return 0
            else:
                return 1

        left = 0
        right = len(nums) - 1
    
        while (left < right):
            mid = (left+right)//2

            if nums[mid-1] < nums[mid] > nums[mid+1]:
                left = mid
                break
            
            if nums[mid-1] < nums[mid+1]:
                left = mid + 1
            else:
                right = mid - 1
        
        return left

nums = [1,2,1,3,5,6,4]

p1 = Solution()
print(p1.findPeakElement(nums))
```