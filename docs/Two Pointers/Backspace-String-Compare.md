---
sidebar_position: 1 
---

# Backspace String Compare

**[844. Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)**

Solution:
 - Iterate through s and t, if '#' pop() the last value off the newArr otherwise add the value to newArr
    - Only exception is if newArr and a len of 0 in which nothing happens since there is nothing to pop()
 - Return the comparison between parse s and parse t

```python title="Output: True"
class Solution():
    def backspaceCompare(self, s, t):
        return self.parse([], s) == self.parse([], t)

    def parse(self, newArr, oldArr):
        for i in range(len(oldArr)):
            if (oldArr[i] == '#'):
                if len(newArr) != 0:
                    newArr.pop()
            else:
                newArr.append(oldArr[i])

        return newArr

s = "a##c"
t = "#a#c"

p1 = Solution()
print(p1.backspaceCompare(s, t))
```

Same process as above but easier to understand

```python
class Solution():
    def backspaceCompare(self, s, t):
        newS = []
        newT = []

        for i in range(len(s)):
            if (s[i] == '#'):
                if len(newS) != 0:
                    newS.pop()
            else:
                newS.append(s[i])
            
        for i in range(len(t)):
            if (t[i] == '#'):
                if len(newT) != 0:
                    newT.pop()
            else:
                newT.append(t[i])

        return newS == newT

s = "a##c"
t = "#a#c"

p1 = Solution()
print(p1.backspaceCompare(s, t))
```