---
sidebar_position: 2
---

# Linked List Cycle

**[141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)**

Solution:
 - Store nodes in dictionary
 - If cycle head will continue to loop
 - If head is found in the dictionary return true
 - If there isn't a cycle the linked list will eventually reach the end which just returns False

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
                return True
            else:
                dict[head] = True
            
            head = head.next
        
        return False
```
