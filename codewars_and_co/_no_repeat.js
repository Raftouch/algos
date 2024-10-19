// [1,1,2,2,3,4,5,5] --> [3,4]
// remove all numbers that have repeated values

function noRepeat(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++
      }
    }
    if (count === 1) {
      result.push(arr[i])
    }
  }
  return result
}

function linearNoRepeat(arr) {
  const result = []
  const dictionary = {}
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    dictionary[item] = dictionary[item] ? dictionary[item] + 1 : 1
  }

  console.log('Dictionary : ', dictionary)

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (dictionary[item] === 1) {
      result.push(item)
    }
  }
  return result
}

console.log(noRepeat([1, 1, 2, 2, 3, 4, 5, 5]))

console.log(linearNoRepeat([1, 1, 2, 2, 3, 4, 5, 5, 5, 5, 7, 8, 9, 9]))
