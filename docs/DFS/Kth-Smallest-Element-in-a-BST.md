---
sidebar_position: 2
---

# Kth Smallest Element in a BST

**[230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)**

Solution:
 - Root has to have at least 1 node
 - DFS to get all values in the BT (could use BFS as well)
 - Sort the return the kth index value of the sorted array

```python title="Output: 1"
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def __repr__(self):
      return str(self.val)

class Solution:
    def kthSmallest(self, root, k):
        if root and not root.left and not root.right:
            return root.val
        
        self.values = []
        self.dfs(root)

        self.values.sort()
        return self.values[k-1]

    def dfs(self, node):
        if node:
            self.values.append(node.val)

            if node.left:
                self.dfs(node.left)
            
            if node.right:
                self.dfs(node.right)
root = TreeNode(3, TreeNode(1, None, TreeNode(2)), TreeNode(4)) 
k = 1

p1 = Solution()
print(p1.kthSmallest(root, k))
```