---
sidebar_position: 32
---

# Insert Intervals

**[57. Insert Intervals](https://leetcode.com/problems/insert-intervals/)**

```python title="Output: [[1,2], [3,10], [12,16]]"
class Solution():
    def insertIntervals(self, intervals, newInterval):
        intervals.append(newInterval)
        intervals.sort()
        output = []

        curr = intervals[0]

        for i in range(1, len(intervals)):
            if curr[-1] >= intervals[i][0]:
                upper = max(intervals[i][-1], curr[-1])
                curr = [curr[0], upper]
            else:
                output.append(curr)
                curr = intervals[i]
        
        output.append(curr)

        return output

intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]
newInterval = [4,8]

p1 = Solution()
print(p1.insertIntervals(intervals, newInterval))
```