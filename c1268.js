/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  products.sort()

  let result = []

  for (let i = 1; i <= searchWord.length; i++) {
    let pre = searchWord.substr(0, i)
    let list = []
    let j = 0
    while (list.length < 3 && j < products.length) {
      if (products[j].substr(0, i) === pre) {
        list.push(products[j])
      }
      j++
    }
    result.push(list)
  }

  return result
}

console.log(suggestedProducts(
  ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
  'mouse'
))
