from typing import List


class Solution:
    def countQuadruplets(self, nums: List[int]) -> int:
        sortedList = sorted(nums)
        count = 0

        for i in range(0, len(sortedList)):
          for j in range(i+1, len(sortedList)):
            for k in range(j+1, len(sortedList)):
              for l in range(k+1, len(sortedList)):
                if nums[i] + nums[j] + nums[k] == nums[l]:
                  count += 1

        return count
