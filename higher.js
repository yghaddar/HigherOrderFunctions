
function repeat(fn, n) {
  for (let i = 0; i < n; i++){
    fn()
  }
}
function hello(){
  console.log('Hello world')
}

function goodbye() {
  console.log('Goodbye world')
}

repeat(hello, 5)
repeat(goodbye, 5)


function filter(arr, fn) {
    let newArray = []
    for (let i = 0; i < arr.length; i++){
      if (fn(arr[i]) === true){
        newArray.push(arr[i])
      }
    }
  return newArray
}


function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0
  return function(location){
    warningCounter++
    console.log(`Warning there is a ${typeOfWarning} hazard at ${location}!`)
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
  }
}

let varOne = hazardWarningCreator("tornado")
let varTwo= hazardWarningCreator("tornado")
let varThree= hazardWarningCreator("tornado")

const tornadoWarning = hazardWarningCreator('tornado coming through')

varOne('michigan')
varOne('michigan')
varOne('michigan')