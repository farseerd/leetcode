/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
  function max(a, b) {
    return a > b ? a : b
  }

  function getScore(word) {
    let sum = 0
    for (let i = 0; i < word.length; i++) {
      sum += score[word[i].charCodeAt() - 97]
    }
    return sum
  }

  const scoreMap = {}
  for (let word of words) {
    scoreMap[word] = getScore(word)
  }

  function removeWord(word, arr) {
    arr = [...arr]
    for (let i = 0; i < word.length; i++) {
      let b = true
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === word[i]) {
          arr[j] = null
          b = false
          break
        }
      }
      if (b) return null
    }
    return arr
  }

  function calcScore(list, arr) {
    if (list.length === 0) return 0
    if (!arr) return 0
    let word = list[0]
    removedArr = removeWord(word, arr)
    if (removedArr) {
      return max(
        scoreMap[word] + calcScore(list.slice(1), removedArr),
        calcScore(list.slice(1), arr)
      )
    } else {
      return calcScore(list.slice(1), arr)
    }
  }

  return calcScore(words, letters)
}
