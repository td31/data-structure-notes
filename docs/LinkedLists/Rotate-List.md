---
sidebar_position: 7
---

# Rotate List

**[61. Rotate List](https://leetcode.com/problems/rotate-list/)**

Solution:
 - Not great memory usage
 - Extract value and push into array
 - k = k % len(vals) to handle cases where k = 1000000
    - Only need to do rotations if there is a remainder
 - Push excess elements to front and remove them
 - Rebuilt list and return

```python title="Output: 4->5->1->2->3"
class ListNode():
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def __repr__(self):
        return str(self.val)

class Solution():
    def rotateRight(self, head, k):
        if not head or k == 0:
            return head

        vals = []
        while(head):
            vals.append(head.val)
            head = head.next

        k = k % len(vals)

        if k != len(vals):
            for i in range(k):
                vals.insert(0, vals.pop(len(vals)-1))

        newLL = ListNode(-1)
        dummy = newLL
        
        for i in range(len(vals)):
            newLL.next = ListNode(vals[i])
            newLL = newLL.next

        return dummy.next

head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
k = 2

p1 = Solution()
print(p1.rotateRight(head, k))
```
