/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */

// dp

var jobScheduling = function(startTime, endTime, profit) {
  let jobs = []
  for (let i = 0; i < startTime.length; i++) {
    jobs.push({
      start: startTime[i],
      end: endTime[i],
      profit: profit[i]
    })
  }
  jobs.sort((a, b) => a.end - b.end)

  function max(a, b) {
    return a > b ? a : b
  }

  let dp = {
    1: 0
  }
  let prevEnd = -1

  for (let i = 0; i < jobs.length; i++) {
    let job = jobs[i]

    if (prevEnd === -1) {
      dp[job.end] = job.profit
      prevEnd = -1
    }
    if (dp[job.start] === undefined) {
      for (let p = job.start - 1; p >= 1; p--) {
        if (dp[p] !== undefined) {
          dp[job.start] = dp[p]
          break
        }
      }
      if (dp[job.start] === undefined) {
        dp[job.start] = 0
      }
    }

    dp[job.end] = max((dp[job.start] || 0) + job.profit, dp[prevEnd] || 0)
    prevEnd = job.end
  }

  return dp[jobs[jobs.length - 1].end]
}

