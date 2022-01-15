---
sidebar_position: 2
---

# Search a 2D Matrix

**[74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2D-matrix/)**

Solution:
 - Check if last value in subarray is larger than target
 - If it is run a binary search on the subarray and search for target
 - If target is greater than last element in last subarray return False

```python title="Output: True"
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for i in range(len(matrix)):
            if matrix[i][-1] == target:
                return True

            if matrix[i][-1] < target:
                continue
            else:
                return self.bsearch(matrix[i], target)
        return False
    
    def bsearch(self, nums, target):
        left = 0
        right = len(nums) - 1

        while (left <= right):
            mid = (left+right)//2

            if nums[mid] == target:
                return True
            
            if nums[mid] > target:
                right = mid - 1
            else:
                left = mid + 1
        
        return False

matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target = 3

p1 = Solution()
print(p1.searchMatrix(matrix, target))
```