---
sidebar_position: 3
---

# Binary Tree Level Order Traversal 2

**[107. Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/)**

Solution:

- BFS
- Use insert(0)/Stack to store output. Since BFS is top down level traversal using a stack will reverse it
- Return output once BFS is complete

```python title="Output: [[15,7], [9, 20], [3]]"
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def __repr__(self):
        return str(self.val)

class Solution:
    def levelOrderBottom(self, root):
        if not root:
            return root

        if not root.left and not root.right:
            return [[root.val]]

        output = []
        current = [root]

        while current:
            next, level = [], []

            for node in current:
                level.append(node.val)

                if node.left:
                    next.append(node.left)

                if node.right:
                    next.append(node.right)

            output.insert(0, level)
            current = next

        return output

root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))

p1 = Solution()
print(p1.levelOrderBottom(root))
```
