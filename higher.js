
// function repeat(fn, n) {
//   for (let i = 0; i < n; i++){
//     fn()
//   }
// }
// function hello(){
//   console.log('Hello world')
// }

// function goodbye() {
//   console.log('Goodbye world')
// }

// repeat(hello, 5)
// repeat(goodbye, 5)


// function filter(arr, fn) {
//     let newArray = []
//     for (let i = 0; i < arr.length; i++){
//       if (fn(arr[i]) === true){
//         newArray.push(arr[i])
//       }
//     }
//   return newArray
// }


// function hazardWarningCreator(typeOfWarning){
//   let warningCounter = 0
//   return function(location){
//     warningCounter++
//     console.log(`Warning there is a ${typeOfWarning} hazard at ${location}!`)
//     console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
//   }
// }

// let varOne = hazardWarningCreator("tornado")
// let varTwo= hazardWarningCreator("tornado")
// let varThree= hazardWarningCreator("tornado")

// const tornadoWarning = hazardWarningCreator('tornado coming through')


// varOne('michigan')
// varOne('michigan')
// varOne('michigan')

//forEach Filter & Map 

let turtle = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]

// let move = turtle.filter(function(num){
//     num[0] >= 0 && num[1] >= 0
// }) 

// console.log(move)


// let mapFunction = turtle.map(function(step){
//    return step[0] + step[1]
// })

// console.log(mapFunction)

console.log(turtle[3])