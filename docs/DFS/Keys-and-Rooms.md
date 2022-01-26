---
sidebar_position: 5
---

# Keys and Rooms

**[841. Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/)**

```python title="Output: False"
class Solution():
    def canVisitAllRooms(self, rooms):
        keys = set(rooms[0])
        keys.add(0)
        rooms.pop(0)

        self.search(keys, rooms)
        return len(self.visited) == len(rooms)

    def search(self, keys, rooms):
        for i in range(1, len(rooms)):
            room = rooms[i]

            if i in keys:
                rooms.pop(0)
                for j in range(len(room)):
                    keys.add(room[j])

                self.search(keys, rooms)

rooms = [[1,3],[3,0,1],[2],[0]]

p1 = Solution()
print(p1.canVisitAllRooms(rooms))
```