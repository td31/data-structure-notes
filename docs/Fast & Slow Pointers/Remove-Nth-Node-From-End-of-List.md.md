---
sidebar_position: 1
---

# Remove Nth Node From End of List

**[19. Remove Nth Node From End of List](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)**

Solution:
 - n > 1 per constraints
 - Check the length of the Linked List
 - If it's the same as n then just return head.next
    - Removing from back to front so if they are the same that means its every node except the head
 - If not reset current and iterate to the (len - n)th node
 - Brings us to the node right before a removal node
 - Remove the node by leapfroging it and assigning the next pointer to current.next.next
    - We won't get an error accessing current.next.next because the lowest n value is 1

```python title="1->2->3->5"
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeNthFromEnd(self, head, n):
        len = 0
        current = head

        while current:
            len += 1
            current = current.next

        if len == n:
            return head.next
        
        current = head

        for i in range(1, len - n):
            current = current.next
        
        current.next = current.next.next

        return head

head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
n = 2

p1 = Solution()
print(p1.removeNthFromEnd(head))
```