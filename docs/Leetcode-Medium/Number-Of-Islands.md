---
sidebar_position: 2
---

# Number of Islands

**[200. Number of Islands](https://leetcode.com/problems/number-of-islands/)**

Solution: 
 - Scan matrix searching for instance of '1'
 - If found pass into our recurive function the found '1' coordinates and the entire grid
 - Recursively check each position above, below, left and right to the '1' value passed in
 - The intial if statement/base case checks if the new value is valid.  Makes sure the i,j indexes are inside the bounds of the grid
 - If passed the found '1' will update the grid to # which prevents us from double counting the '1'  
 - Lastly we pass in the four adjacent coordinates and keep going recursively
 - Once completed the orginal matrix scan will continue.  If it encounters another island the process repeats and count is incremented
 - Once fully scanned the island count is returned

```python title="Output: 1"
class Solution:
    def numIslands(self, grid):
        if not grid:
            return 0
        
        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == '1':
                    self.dfs(self, grid, i, j)
                    count += 1

        return count

    def dfs(self, grid, i, j):
        if i < 0 or j < 0 or i >= len(grid) or j > len(grid[i]) or grid[i][j] != '1':
            return

        grid[i][j] = '#'
        self.dfs(i+1,j)
        self.dfs(i-1,j)
        self.dfs(i,j+1)
        self.dfs(i,j-1)

grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

p1 = Solution()
print(p1.numIslands(grid))
```
