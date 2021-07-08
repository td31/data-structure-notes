---
sidebar_position: 2
---

# Invert Binary Tree

**[226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)**

Solution:
 - BFS
 - If left and right not null swap positions
 - If only one or the other do a swap where the empty node is just None

```python title="Output (as a BT) = [4,7,2,9,6,3,1] "
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def __repr__(self):
      return str(self.val)

class Solution:
    def invertTree(self, root):
        if not root:
            return None

        if not root.left and not root.right:
            return root

        current = [root]

        while current:
            next = []

            for node in current:
                if node:
                    if node.left and node.right:
                        node.left, node.right = node.right, node.left
                        next.append(node.left)
                        next.append(node.right)

                    if node.left and not node.right:
                        node.left, node.right = None, node.right
                        next.append(None)
                        next.append(node.right)
                    
                    if node.right and not node.left:
                        node.left, node.right = node.right, None
                        next.append(node.left)
                        next.append(None)
                
            current = next
        
        return root
    
root = TreeNode(4, TreeNode(2, TreeNode(1), TreeNod(3)), TreeNode(7, TreeNode(6), TreeNode(9)))

p1 = Solution()
print(p1.invertTree(root))
```
