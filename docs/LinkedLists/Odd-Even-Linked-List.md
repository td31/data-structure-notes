---
sidebar_position: 5
---

# Odd Even Linked List

**[328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/)**

Solution:
 - Generate two new linked lists to hold our odd and even values
 - Iterate through the linked list and alternate between building the odd and even list
 - Take the last node in our first list and link it to the first node in our second list
 - Return the entire list

```python title="Output: 1->3->5->2->4"
class ListNode:
    def __init__(self, val=0, next=None):
      self.val = val
      self.next = next

    def __repr__(self):
      return str(self.val)

class Solution:
    def oddEvenList(self, head):
        dummy = L1 = ListNode(-1)
        dummy2 = L2 = ListNode(-2)
        pos = True

        while head:
            if pos:
                L1.next = ListNode(head.val)
                L1 = L1.next
                pos = not pos
            else:
                L2.next = ListNode(head.val)
                L2 = L2.next
                pos = not pos

            head = head.next
        
        l1.next = dummy2.next

        return dummy.next

head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))

p1 = Solution()
print(p1.oddEvenList(head))
```
