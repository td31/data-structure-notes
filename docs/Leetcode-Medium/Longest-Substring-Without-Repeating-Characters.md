---
sidebar_position: 28
---

# Longest Substring Without Repeating Characters

**[4. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)**

```python title="Output: 3"
class Solution():
    def noRepeat(self, str):
        longest, l = 0, 0
        curr = {}

        for letter in str:
            while letter in curr:
                longest = max(longest, len(curr))
                curr[str[l]] -= 1

                if curr[str[l]] == 0:
                    del curr[str[l]]

                l += 1
            
            if letter not in curr:
                curr[letter] = 1
            else:
                curr[letter] += 1
            
            longest = max(longest, len(curr))
        
        return longest
            
str = "abccde"

p1 = Solution()
print(p1.noRepeat(str))
```