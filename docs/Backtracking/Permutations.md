---
sidebar_position: 2
---

# Permutations

**[46. Permutations](https://leetcode.com/problems/permutations/)**

Solution:
- Similar to other backtracking problems.
 - Build every combination where [1] is first, [2] is first etc.
    - Basically the way we do this is iterating over nums, adding the value to the list (path) then removing it from the nums
        - Creates [1] leaves [2,3] -> next -> Creates [1,2] leaves [3] and creates [1,3] leaves [2] -> next -> Creates [1,2,3] leaves [] and creates [1,3,2] leaves []
        - We do this using nums[:i]+nums[i+1:] -> similar to .remove() 
        - Once nums is empty we append out built array (path)

```python title="Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
class Solution:
    def permute(self, nums):
        output = []
        self.build(nums, [], output)
        return output
    
    def build(self, nums, path, output):
        if not nums:
            output.append(path)
            return
        
        for i in range(len(nums)):
            self.build(nums[:i]+nums[i+1:], path+[nums[i]], ouput)

nums = [1,2,3]

p1 = Solution()
print(p1.permute(nums))
```
