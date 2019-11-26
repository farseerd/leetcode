/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */

// TLE

var jobScheduling = function(startTime, endTime, profit) {
  let jobs = []
  for (let i = 0; i < startTime.length; i++) {
    jobs.push({
      start: startTime[i],
      end: endTime[i],
      profit: profit[i]
    })
  }
  jobs.sort((a, b) => a.start - b.start)

  function max(a, b) {
    return a > b ? a : b
  }

  function f(list, start) {
    if (list.length === 0) return 0
    let head = list[0]

    if (head.start < start) {
      return result
    }
    return max(
      head.profit + f(list.slice(1), head.end),
      f(list.slice(1), start)
    )
  }

  return f(jobs, 1)
}