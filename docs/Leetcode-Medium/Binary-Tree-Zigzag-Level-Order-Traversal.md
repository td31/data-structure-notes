---
sidebar_position: 1
---

# Binary Tree Zigzag Level Order Traversal

**[103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)**

Solution: 
 - Use BFS and each iteration/level use boolean to alternate between using a stack and a queue to store values

```python title="Output: [[3], [20, 9], [15, 7]]"
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def zigzagLevelOrder(self, root):
        if not root:
            return None

        if not root.left and not root.right:
            return [[root.val]]

        output = []
        current = [root]
        direction = True

        while current:
            next, level = [], []

            for node in current:
                if direction:
                    # Queue
                    level.append(node.val)
                else:
                    # Stack
                    level.insert(0, node.val)
                
                if node.left:
                    next.append(node.left)
                
                if node.right:
                    next.append(node.right)

            direction = not direction

            output.append(level)
            current = next
        
        return output

root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))

p1 = Solution(root)
print(p1.zigzagLevelOrder(root))

```
