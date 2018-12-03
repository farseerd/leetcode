/**
 * @param {number[]} deck
 * @return {number[]}
 */

var deckRevealedIncreasing = function (deck) {
  deck = deck.sort(function (a, b) {
    return Number(a) - Number(b)
  })
  let list = []
  while (deck.length > 0) {
    list.push(deck.splice(0, Math.ceil(deck.length / 2)))
  }
  while (list.length > 1) {
    let newList = []
    let len = list.length
    for (let i = 0; i < list[len - 2].length; i++) {
      newList.push(list[len - 2][i])
      if (i < list[len - 1].length) {
        newList.push(list[len - 1][i])
      }
    }
    if (list.length > 2) {
      if (list[len - 2].length + list[len - 1].length != list[len - 3].length) {
        newList = [newList[newList.length - 1], ...newList.slice(0, newList.length - 1)]
      }
    }
    list.splice(list.length - 2)
    list.push(newList)
  }
  return list[0]
};