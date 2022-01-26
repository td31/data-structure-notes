---
sidebar_position: 21
---

# Find All Groups of Farmland

**[1992. Find All Groups of Farmland](https://leetcode.com/problems/find-all-groups-of-farmland/)**

```python title="Output: [[0,0,0,0],[1,1,2,2]]"
class Solution():
    def __init__(self):
        self.output = []

    def findFarmland(self, land):
        for i in range(len(land)):
            for j in range(len(land[i])):
                if land[i][j] == 1:
                    self.output.append([i,j,i,j])
                    self.search(land, i, j)
        
        return self.output
    
    def search(self, land, i, j):
        if i < 0 or j < 0 or i > len(land) - 1 or j > len(land[i]) - 1 or land[i][j] != 1:
            return
        else:
            # self.output[-1][0] = min(self.output[-1][0], i)
            # self.output[-1][1] = min(self.output[-1][1], j)
            self.output[-1][2] = max(self.output[-1][2], i)
            self.output[-1][3] = max(self.output[-1][3], j)

            land[i][j] = "#"

            self.search(land, i+1, j)
            self.search(land, i-1, j)
            self.search(land, i, j+1)
            self.search(land, i, j-1)


land = [[1,0,0],[0,1,1],[0,1,1]]

p1 = Solution()
print(p1.findFarmland(land))
```