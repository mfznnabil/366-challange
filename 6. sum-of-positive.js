// function positiveSum(arr){
//   let result = 0
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0) {
//       result += arr[i]
//     }
//   }
//   return result
// }

// function positiveSum(arr) {
//  return arr.reduce((acc, curr) => {
//     if (curr > 0) return acc + curr
//     if (curr < 0) return acc += 0
//   }, 0)
// }

function positiveSum(arr) {
  return arr.reduce((acc, curr) => {
    return curr < 0 ? (acc += 0) : acc + curr
  }, 0)
}

positiveSum([1, 2, 3, 4, 5])
