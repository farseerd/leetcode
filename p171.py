def toIndex(ch):
  return ord(ch) - 64
  
class Solution:
  def titleToNumber(self, columnTitle: str) -> int:
    count = 0
    for ch in columnTitle:
      count *= 26
      count += toIndex(ch)
    return count 
    
s = Solution()
result = s.titleToNumber("AA")
print(result)
