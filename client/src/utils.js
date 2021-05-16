const t9 = {
  '1': ['1'],
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

const addDigit = (array, options) => {
  let newArray = []
  for(let i = 0; i < array.length; i++) {
    let subSolution = array[i]
    for(let x = 0; x < options.length; x++) {
      let letter = options[x]
      newArray.push(subSolution.concat(letter))
    }
  }
  return newArray
}

const allCombinations = (code, toOmit) => {
  let result = ['']
  for (let i = 0; i < code.length; i++) {
    const thisDigit = code[i]
    result = addDigit(result, t9[thisDigit] || [])
  }
  return result.filter(x => !toOmit.includes(x))
}

module.exports = { wordToNumber, t9, t9Reverse, allCombinations }