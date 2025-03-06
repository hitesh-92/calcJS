//Functional programming because I don't know how to use OOP javascipt

console.log("MAIN.JS running")

let sum = undefined
let userInput = ""
let display = ""
let displayOperator = ""


function setUpCalc(){

  console.log("ANON!")
  
  const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

  nums.map((value, key) => {

    if (key==0){
      
    }

    let i = key
    let num = value

    const button = document.getElementById(num)

    button.addEventListener('click', () => {
      userInput = `${userInput}${i}`
      console.log(`key:${key} | value:${value}`)

    })

    
  })

};

setUpCalc()


function calc(user_operator, firstInput, secondInput){

  const operator = user_selected_operation(user_operator)

  const result = 0

  console.log("CALC RUNNING")
}


function user_selected_operation(operationInput){

  const addition = (x, sum) => x + sum
  const minus = (x, sum) => sum - x
  const multiply = (x, sum) => x * sum
  const divide = (x, sum) => sum / x

  switch(operationInput){
    case "+":
      return addition
    case "-":
      return minus
    case "*":
      return multiply
    case "/":
      return divide
  }

}


function resetInputs({userInput, displayOperator, sum, display}){

  const resetUserInput = () => userInput = ""
  const resetOperator = () => displayOperator = ""
  const resetSum = () => sum = undefined
  const resetDisplay = () => display = ""

  resetUserInput()
  resetOperator()
  resetSum()
  resetDisplay()

}