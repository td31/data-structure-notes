---
sidebar_position: 27
---

# Longest Repeating Character Replacement

**[424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)**

Solution:
 - Trick with replacement sliding window questions is to track which element within the window has the highest frequency

```python title="Output: 5"
class Solution():
    def longestReplacement(self, s, k):
        longest, max_freq, l = 0, 0, 0
        curr = {}

        for r, letter in enumerate(s):
            if letter not in curr:
                curr[letter] = 1
            else:
                curr[letter] += 1
            
            max_freq = max(max_freq, curr[letter])

            if (r-l+1 - max_freq) > k:
                curr[s[l]] -= 1

                if curr[s[l]] == 0:
                    del curr[s[l]]

                l += 1

            longest = max(longest, r-l+1)
        
        return longest

s = "aabccbb"
k = 2

p1 = Solution()
print(p1.longestReplacement(s, k))
```