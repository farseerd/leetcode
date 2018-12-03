/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {

  let unlockedNum = 1
  let unlockedList = Array(rooms.length).fill(false)
  unlockedList[0] = true

  let keySet = new Set(rooms[0])

  while (keySet.size > 0) {
    let key = keySet.values().next().value
    keySet.delete(key)
    if (!unlockedList[key]) {
      unlockedList[key] = true
      unlockedNum++
      for (let k of rooms[key]) {
        if (!unlockedList[k]) keySet.add(k)
      }
    }
  }

  return unlockedNum === rooms.length

};