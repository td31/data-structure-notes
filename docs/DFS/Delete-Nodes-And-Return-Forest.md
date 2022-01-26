---
sidebar_position: 4
---

# Delete Nodes And Return Forest

**[1110. Delete Nodes And Return Forest](https://leetcode.com/problems/delete-nodes-and-return-forest/)**

```python title="Output: [[1,2,null,4],[6],[7]]"
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def __repr__(self) -> str:
        return str(self.val)

class Solution:
    def __init__(self):
        self.output = []

    def delNodes(self, root, to_delete):
        if not root:
            return [root]

        if root.val not in to_delete:
            self.output.append(root)
            self.dfs(root, to_delete, False)
        else:
            self.dfs(root, to_delete, True)
        
        return self.output
        
    def dfs(self, node, to_delete, newRoot):
        if node:
            if node.left:             
                if node.left.val in to_delete:
                    self.dfs(node.left, to_delete, True)
                    node.left = None
                else:
                    if newRoot:
                        self.output.append(node.left)

                    self.dfs(node.left, to_delete, False)
                
            if node.right:             
                if node.right.val in to_delete:
                    self.dfs(node.right, to_delete, True)
                    node.right = None
                else:
                    if newRoot:
                        self.output.append(node.right)
                        
                    self.dfs(node.right, to_delete, False)

root = TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3, TreeNode(6), TreeNode(7)))
to_delete = [3,5]

p1 = Solution()
print(p1.delNodes(root, to_delete))
```