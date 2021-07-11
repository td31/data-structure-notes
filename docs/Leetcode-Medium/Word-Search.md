---
sidebar_position: 8
---

# Word Search

**[79. Word Search](https://leetcode.com/problems/word-search/)**

Solution:

- Scan matrix and pass board, coords and word to dfs recursive search for 'word' by letter
- Pretty much identical to "Number of Islands" only difference is implementation of temp variable to hold the preserved board
- As letters are found they are updated to '#' to prevent double counting a letter but if the recurvise search finds some but not all letters in a word we still need to be able to restore the board to continue the scan of the matrix once the 'dfs' function completely finishes

```python title="Output: True"
class Solution:
    def exist(self, board, word):
        if not board:
            return False

        for i in range(len(board)):
            for j in range(len(board(i))):
                if self.dfs(board, i, j, word):
                    return True

    def dfs(self, board, i, j, word):
        if len(word) == 0
            return True

        if i < 0 or j < 0 or i >= len(board) or j >= len(board[i]) or word[0] != board[i][j]
            return False

        temp = board[i][j]
        boardp[i][j] = "#"

        result = self.dfs(board, i+1, j, word[1:]) or self.dfs(board, i-1, j, word[1:]) or self.dfs(board, i, j+1, word[1:]) or self.dfs(board, i, j-1, word[1:])
        board[i][j] = temp
        return result

board = [
    ["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]
]
word = "ABCCED"

p1 = Solution()
print(p1.exist(board, word))
```
