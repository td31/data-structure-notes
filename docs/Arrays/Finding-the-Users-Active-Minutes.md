---
sidebar_position: 3
---

# Finding the Users Active Minutes

**[1817. Finding the Users Active Minutes](https://leetcode.com/problems/finding-the-users-active-minutes/)**

```python title="Output = [0,2,0,0,0]"
class Solution:
    def findingUsersActiveMinutes(self, logs, k):
        output = [0] * k
        store = {}

        for i in range(len(logs)):
            id = logs[i][0]
            min = logs[i][1]

            if id not in store:
                store[id] = set()
            
            store[id].add(min)
        
        for id in store:
            output[len(store[id]) - 1] += 1
        
        return output

logs = [[0,5],[1,2],[0,2],[0,5],[1,3]]
k = 5

p1 = Solution()
print(p1.findingUsersActiveMinutes(logs, k))
```