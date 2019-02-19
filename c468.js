/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {

  IP = IP.toLowerCase()

  const [IPV4, IPV6, NO] = ['IPv4', 'IPv6', 'Neither']

  if (/\./.test(IP)) {
    let arr = IP.split('.')
    if (arr.length != 4) return NO
    for (let item of arr) {
      if (!/^\d{1,3}$/.test(item) || /^0.+/.test(item) || Number(item) > 255) return NO
    }
    return IPV4
  } else if (/\:/.test(IP)) {
    let arr = IP.split(':')
    if (arr.length != 8) return NO
    for (let item of arr) {
      if (item.length > 4 || !/^[\da-f]{1,4}$/.test(item)) return NO
    }
    return IPV6
  } else {
    return NO
  }

};