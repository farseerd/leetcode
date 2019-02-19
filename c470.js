/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {

  let fn = () => {
    let [a, b] = [rand7(), rand7()]
    if (a <= 3 && b >= 5) {
      return fn()
    } else {
      return (a + b) % 10 + 1
    }
  }

  return fn()

};