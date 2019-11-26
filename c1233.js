/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  folder.sort()
  let result = [folder[0]]
  let current = result[0]

  for (let i = 1; i < folder.length; i++) {
    let f = folder[i]
    if (f.substr(0, current.length + 1) !== current + '/') {
      result.push(f)
      current = f
    }
  }

  return result
}
