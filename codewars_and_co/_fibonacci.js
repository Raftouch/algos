// const string = 'AFGTYHJ78965kjhjfdhf'
// const newString = string.replace(/[A-Z]*/, ' ')
// console.log(newString)

// f(n) = f(n-1) + f(n-2)

// RECURSION
function fibonacci(n) {
  if (n <= 0) {
    return 0
  }
  if (n <= 2) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(8)) // 21

// ITERATION
function iterationFibonacci(n) {
  if (n <= 0) {
    return 0
  }
  if (n <= 2) {
    return 1
  }
  let prev = 1
  let result = 1
  for (let i = 0; i < n - 2; i++) {
    let tmp = result
    result += prev
    prev = tmp
  }
  return result
}

console.log(iterationFibonacci(8)) // 21
