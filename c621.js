/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let count = Array(26).fill(0)
  for (let task of tasks) count[task.charCodeAt(0) - 65]++
  let maxCount = Math.max(...count)
  let maxCountNum = count.filter(item => item === maxCount).length
  let minResult = (maxCount - 1) * (n + 1) + maxCountNum
  return Math.max(minResult, tasks.length)
}
