---
sidebar_position: 3
---

# Linked List Cycle II

**[142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)**

Solution:
 - Identically to the Linked List Cycle question but instead the dictionary returns the duplicate head value instead of True
 - If no cycle returns None

```python
class ListNode:
    def __init__(self, val=0, next=None):
      self.val = val
      self.next = next

    def __repr__(self):
      return str(self.val)

class Solution:
    def hasCycle(self, head):
        dict = {}

        while head:
            if head in dict:
                return dict[head]
            else:
                dict[head] = head
            
            head = head.next
        
        return False
```
