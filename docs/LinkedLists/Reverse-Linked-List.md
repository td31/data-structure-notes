---
sidebar_position: 1
---

# Reverse Linked List

**[206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)**

Two ways:

- Build list while iterating through
- Iterate through LL store values then generate a new list

```python
class ListNode:
    def __init__(self, val=0, next=None):
      self.val = val
      self.next = next

    def __repr__(self):
      return str(self.val)

class Solution:
  def reverseLL(self, head):
    prev = None
    while head:
      prev = ListNode(head.val, prev)
      head = head.next

    return prev


head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))

p1 = Solution()
print(p1.reverseLL(head))
```

```python title="Faster solution according to LC"
class ListNode:
    def __init__(self, val=0, next=None):
      self.val = val
      self.next = next

    def __repr__(self):
      return str(self.val)

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        dummy = current = ListNode(-1)
        values = {}
        counter = 0

        while(head != None):
            values[counter] = head.val
            head = head.next
            counter += 1

        for i, value in enumerate(values):
            current.next = ListNode(values[len(values) - i - 1])
            current = current.next

        return dummy.next

head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))

p1 = Solution()
print(p1.reverseLL(head))
```
