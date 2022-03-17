---
sidebar_position: 3
---

# Interval List Intersections

**[986. Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)**

```python title="Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]"
class Solution():
    def intersection(self, firstList, secondList):
        res = []
        if not firstList or not secondList:
            return res
        
        i, j  = 0, 0

        while i < len(firstList) and j < len(secondList):
            f_start, f_end = firstList[i][0], firstList[i][1]
            s_start, s_end = secondList[j][0], secondList[j][1]

            if f_start <= s_end and s_start <= f_end:
                res.append([max(f_start, s_start), min(f_end, s_end)])
                
            if f_end < s_end:
                i += 1
            else:
                j += 1

        return res

firstList = [[0, 2], [5, 10], [13, 23], [24, 25]]
secondList = [[1, 5], [8, 12], [15, 24], [25, 26]]

p1 = Solution()
print(p1.intersection(firstList, secondList))
```