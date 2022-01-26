---
sidebar_position: 7
---

# Increasing Order Search Tree

**[897. Increasing Order Search Tree](https://leetcode.com/problems/increasing-order-search-tree/)**

```python title="Output (as a BT) = [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]"
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def __repr__(self) -> str:
        return str(self.val)

class Solution:
    def increasingBST(self, root):
        if root and not root.left and not root.right:
            return root
        
        values = []
        current = [root]
        while current:
            next = []

            for node in current:
                if node:
                    values.append(node.val)

                    if node.left:
                        next.append(node.left)
                    
                    if node.right:
                        next.append(node.right)

            current = next

        values.sort()
        dummy = head = TreeNode(-1)

        for val in values:
            head.right = TreeNode(val)
            head = head.right

        return dummy.right

root = TreeNode(5, TreeNode(3, TreeNode(2, TreeNode(1)), TreeNode(4)), TreeNode(6, TreeNode(8, TreeNode(7), TreeNode(9))))

p1 = Solution()
print(p1.increasingBST(root))
```
