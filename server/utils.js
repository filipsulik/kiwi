const t9 = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
}

const t9Reverse = Object.entries(t9).reduce((acc, [number, chars]) => {
  const objectTmp = Object.fromEntries(chars.map(char => [char, number]))
  return ({...acc, ...objectTmp})
}, {})

wordToNumber = (word) => {
  return word.split('').map(char => t9Reverse[char]).join('')
}

numberToWord = (number) => {
  return `${number}`.split('').map(digit => t9[digit]).join('')
}

module.exports = { wordToNumber, numberToWord }