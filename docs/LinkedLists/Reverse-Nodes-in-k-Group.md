---
sidebar_position: 2
---

# Reverse Nodes in k-Group

**[25. Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)**

Solution:
- Non optimal

```python title="Output: 2->1->4->3->5"
class ListNode:
    def __init__(self, val=0, next=None):
      self.val = val
      self.next = next

    def __repr__(self):
      return str(self.val)

class Solution:
    def reverseKGroup(self, head, k):
        if not head.next or k == 1:
            return head

        values, output = [], []
        counter = 0
        dummy = newLL = ListNode(-1)

        while head:
            values.append(head.val)
            head = head.next

        iterations = len(values) // k

        for i in range(iterations):
            for m in range(k):
                output.insert(counter, values[m+counter])
            counter += k

        for i in range(len(output), len(values)):
            output.append(values[i])

        for i, value in enumerate(output):
            newLL.next = ListNode(value)
            newLL = newLL.next

        return dummy.next

head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
k = 2

p1 = Solution()
print(p1.reverseKGroup(head, k))
```
