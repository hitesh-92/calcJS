//Functional programming because I don't know how to use OOP javascipt

alert("TESTING JS")

let sum = undefined
let userInput = undefined
let display = ""
let displayOperator = ""

const resetUserInput = () => userInput= ""
const resetOperator = () => displayOperator = ""
const resetSum = () => sum = undefined
const resetDisplay = () => display = ""

function calc(user_operator, firstInput, secondInput){

  const operator = user_selected_operation(user_operator)

  document.getElementById("display").innerHTML = "HITESH"

  const result = 0

  console.log("CALC RUNNING")
}

const button = document.getElementById("three")
button.addEventListener('click', () => {
  console.log("THEEEE")
  alert("pressed Three")
})


function user_selected_operation(operstionInput){

  const addition = (x, sum) => x + sum
  const minus = (x, sum) => sum - x
  const multiply = (x, sum) => x * sum
  const divide = (x, sum) => sum / x

  swtich(operationInput){
    case "+":
      return multiply
    case "-":
      return minus
    case "*":
      return multiply
    case "/":
      return divide

  }

}
