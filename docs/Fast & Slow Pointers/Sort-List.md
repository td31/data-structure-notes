---
sidebar_position: 3
---

# Sort List

**[148. Sort List](https://leetcode.com/problems/sort-list/)**

Solution:
 - 90% percentile for speed but really bad memory usage (O(n))
    - Looks like "correct" solution uses merge sort
 - Extract values, sort then generate a new Linked List with the sorted values

```python
class ListNode:
    def __init__(self, val=0, next=None):
      self.val = val
      self.next = next

    def __repr__(self):
      return str(self.val)

class Solution:
    def sortList(self, head):
        dummy = current = ListNode(-1)
        values = []

        while head:
            values.append(head.val)
            head = head.next

        values.sort()

        for i in range(len(values)):
            current.next = ListNode(values[i])
            current = current.next

        return dummy.next

head = ListNode(4, ListNode(2, ListNode(1, ListNode(3))))

p1 = Solution()
print(p1.sortList(head))
```
