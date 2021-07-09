---
sidebar_position: 2
---

# Add Two Numbers

**[2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)**

Solution:
 - Iterate through l1 and l2 and extract values into correspoding array's while also typecasting to char's instead of int's
 - Use insert(0) to emulate using a stack to reverse the order that they are stored as we iterate over the linked lists
 - .join() to update into a single string -> ["3", "2", "4"] becomes "324"
 - Typecase to int and add them together for the total
 - Typecase back to a string and reverse the string using -1 slice
 - Iterate over the string like an list storing each value in a new node in our new linked list
 - Return the head of the new list once done iterating

```python title="Output: 7->0->8"
class ListNode:
    def __init__(self, val=0, next=None):
      self.val = val
      self.next = next

    def __repr__(self):
      return str(self.val)

class Solution:
    def addTwoNumbers(self, l1, l2):
        l1List, l2List = [], []
        l1Str, l2Str = "", ""

        while l1:
            l1List.insert(0, str(l1.val))
            l1 = l1.next

        while l2:
            l2List.insert(0, str(l2.val))
            l2 = l2.next
        
        l1Str = l1Str.join(l1List)
        l2Str = l2Str.join(l2List)
    
        total = int(l1Str) + int(l2Str)

        output = str(total)[::-1]

        dummy = newList = ListNode(-1)

        for i, value in enumerate(output):
            newList.next = ListNode(value)
            newList = newList.next
        
        return dummy.next

l1 = ListNode(2, ListNode(4, ListNode 3))
l2 = ListNode(5, ListNode(6, ListNode 4))

p1 = Solution()
print(p1.addTwoNumbers(l1, l2))
```
