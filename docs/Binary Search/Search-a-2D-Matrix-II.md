---
sidebar_position: 3
---

# Search a 2D Matrix II

**[240. Search a 2D Matrix II](https://leetcode.com/problems/search-a-2D-matrix-ii/)**

Solution:
 - Similar to 'Search a 2D Matrix' instead the constraints to run a binary search on the subarray are:
    - If the last element in the subarray is greater than or equal to the target and the first element in the target is lesser than or equal to the target

```python title="Output: True"
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        found = False

        for i in range(len(matrix)):
            if (matrix[i][-1] < target or matrix[i][0] > target):
                continue

            if (self.bs(matrix[i], target)):
                found = True
                break

        return found

    def bs(self, nums, target):
        if (len(nums) == 1):
            return nums[0] == target
        
        low = 0
        high = len(nums) - 1

        while (low <= high):
            mid = (low+high)//2

            if (nums[mid] == target):
                return True

            if (nums[mid] < target):
                low = mid + 1
            else:
                high = mid - 1

        return False

matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target = 3

p1 = Solution()
print(p1.searchMatrix(matrix, target))
```