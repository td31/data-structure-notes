---
sidebar_position: 2 
---

# Spiral Matrix

**[54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)**

```python title="Do not return anything, modify matrix in-place instead.' 'Output' = [1,2,3,6,9,8,7,4,5]"
class Solution:
    def spiralOrder(self, martix):
        output = []

        while matrix:
            output.extend(matrix.pop(0))
            matrix = list(zip(*matrix))
            matrix = matrix[::-1]

        return output

matrix = [[1,2,3],[4,5,6],[7,8,9]]

p1 = Solution()
print(p1.spiralOrder(matrix))
```
