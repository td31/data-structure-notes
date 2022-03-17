---
sidebar_position: 25
---

# Fruit Into Baskets

**[904. Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)**

```python title="Output: 4"
class Solution():
    def fruits(self, fruits):
        l, largest = 0, 0
        curr = {}

        for tree in fruits:
            while len(curr) == 2 and tree not in curr:
                largest = max(largest, sum(curr.values()))

                curr[fruits[l]] -= 1

                if curr[fruits[l]] == 0:
                    del curr[fruits[l]]

                l += 1

            if tree in curr:
                curr[tree] += 1
            else:
                curr[tree] = 1

            if len(curr) <= 2:
                largest = max(largest, sum(curr.values()))

        return largest

fruits = [1, 2, 3, 2, 2]

p1 = Solution()
print(p1.fruits(fruits))
```