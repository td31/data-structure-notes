---
sidebar_position: 1
---

# Rotate Image

**[48. Rotate Image](https://leetcode.com/problems/rotate-image/)**

Solution:
 - First nested loops swaps the position of the rows and columns
 - Reverse the order of values in each new row

```python title="Do not return anything, modify matrix in-place instead.' 'Output' = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]"
class Solution:
    def rotate(self, martix):
        for i in range(len(matrix)):
            for j in range(len(matrix)[j]):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

        # matrix becomes [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

        for i in range(len(matrix)):
            matrix[i] = matrix[i][::-1]

        # matrix becomes [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

matrix = [[1,2,3],[4,5,6],[7,8,9]]

p1 = Solution()
print(p1.rotate(matrix))
```
