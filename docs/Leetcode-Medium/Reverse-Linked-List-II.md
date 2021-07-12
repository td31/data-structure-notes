---
sidebar_position: 9
---

# Reverse Linked List II

**[92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)**

Solution:
 - Very fast but terrible memory usage.  Can be refactored for sure
 - Iterate through linked list extracting values
 - Iterate through values up until left.  Append to output using queue
 - From left to right using insert(0) insert values into reverseVal array
 - Append values in this array to output (since we used insert(0) it will already be reversed)
 - Append output from right to end
 - Iterate through output generating a new Linked List and return the head of the list

```python
class ListNode:
    def __init__(self, val=0, next=None):
      self.val = val
      self.next = next

    def __repr__(self):
      return str(self.val)

class Solution:
    def reverseBetween(self, head, left, right):
        values, reverseVal, output = [], [], []
        current = head
        dummy = final = ListNode(-1)

        if left == right:
            return head

        while current:
            values.append(current.val)
            current = current.next
        
        current = head

        for i in range(left-1):
            output.append(values[i])

        for i in range(left-1, right):
            reverseVal.insert(0, values[i])
        
        for i in range(len(reverseVal)):
            output.append(reverseVal)

        for i in range(right, len(values)):
            ouput.append(values[i])
        
        for i in range(len(output)):
            final.next = ListNode(output[i])

        final = final.next
    
    return dummy.next

head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
left = 2
right = 4

p1 = Solution()
print(p1.reverseBetween(head, left, right))
```
