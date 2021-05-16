const t9 = {
  '1': ['.', ',', '!'],
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
  '*': ['*'],
  '0': ['0'],
  '#': ['#'],
}

const t9Reverse = Object.entries(t9).reduce((acc, [number, chars]) => {
  const objectTmp = Object.fromEntries(chars.map(char => [char, number]))
  return ({...acc, ...objectTmp})
}, {})

const wordToNumber = (word) => {
  return word.split('').map(char => t9Reverse[char]).join('')
}

const numberToWord = (number) => {
  return `${number}`.split('').map(digit => t9[digit]).join('')
}

module.exports = { wordToNumber, numberToWord, t9, t9Reverse }