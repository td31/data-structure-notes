---
sidebar_position: 1
---

# Merge k Sorted Lists

**[213. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)**

Solution:
 - Nested loop that iterates through the list of linked lists and grabs the values
 - Sorts then generates a new linked list and returns the new linked list

```python
class ListNode:
    def __init__(self, val=0, next=None):
      self.val = val
      self.next = next

    def __repr__(self):
      return str(self.val)

class Solution:
    def mergeKLists(self, lists):
        values = []

        for linkedLists in lists:
            while linkedList:
                values.append(linkedList.val)
                linkedList = linkedList.next
        
        values.sort()

        dummy = current = ListNode(-1)

        for i, value in enumerate(values):
            current.next = ListNode(value)
            current = current.next
        
        return dummy.next

1 = ListNode(1, ListNode(4, ListNode(5))) 
2 = ListNode(1, ListNode(3, ListNode(4)))
3 = ListNode(2, ListNode(4))
lists = [1,2,3]

p1 = Solution()
print(p1.mergeKLists(lists))
```