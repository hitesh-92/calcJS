//Functional programming because I don't know how to use OOP javascipt

console.log("MAIN.JS running")

let sum = ""
let display = ""
let displayOperator = ""
let userInput = ""

function setUpCalcNums(){

  console.log("Setting up Calculator Nums !")
  //const userInputDisplay = document.getElementById("userInput")

  const nums = [
    "zero", 
    "one", 
    "two", 
    "three", 
    "four", 
    "five", 
    "six", 
    "seven", 
    "eight", 
    "nine",
    "decimal"
  ]

  nums.map((value, key) => {

    let i = key
    let num = value

    const button = document.getElementById(num)

    button.addEventListener('click', () => {

      let newDisplayText //var for text to add to dispay
      const currentUserInput = window.userInput.innerText
      buttonValue = String(i)

      //console.log(`KEY PRESSED: key:${key} | value:${value}`)
      
      //case for "." -- check + only add if does not exist
      if (key === 10){

        const decimalRegex = /\./;
        displayNumHasDecimal = decimalRegex.test(currentUserInput)

        //only add . if no decimal
        newDisplayText = displayNumHasDecimal ? document.createTextNode(`${userInput}`) : document.createTextNode(`${userInput}.`) 

      } else {
        newDisplayText = document.createTextNode( String(userInput) + String(buttonValue) )
      }

      document.getElementById("userInput").appendChild(newDisplayText);

    });
  
  });

}

function setUpOperators(){

  const buttonIds = [
    "addition", "minus",
    "multiply", "divide"
  ]

  console.log("Setting up Calculator Operators !")

  buttonIds.map((value, key) => {
    
    const element = document.getElementById(value)

    
    element.addEventListener('click', () => {
      console.log(`CLICKED: ${value}`)

      const sumElement = document.getElementById("sum")
      const userInputElement = document.getElementById("userInput")
      const operatorElement = document.getElementById("operator")

      const hasSelectedOperator = buttonIds.includes(value)

      const userInputIsEmpty = userInputElement.innerText == ""
      const firstNumberSelected = userInputElement.innerText != "" & hasSelectedOperator


      if ( userInputIsEmpty ){

        //if no number selected, do nothing
        return

      } else if (firstNumberSelected){
        console.log(`ADD OPERATOR`)
        //if: has userInput & selected operator

        //move userInput to sum
        sumElement.innerText = userInputElement.innerText
        //reset userInput
        userInputElement.innerText = ""
        //display operator symbol
        operatorElement.innerText = element.innerText

      }

    })

  })

}

function setUpEqualsButton(){

  document.getElementById("equals").addEventListener("click", (e) => {

    const num1 = document.getElementById("sum").innerText
    const num2 = document.getElementById("userInput").innerText
    const operator = document.getElementById("operator").innerText

    const doNothingYet = num1 == "" || num2 == "" || operator == ""
    if (doNothingYet) { return }

    const result = calculate(num1, num2, operator)
    // console.log(`RESULT: ${result}`)

    resetAll()

    document.getElementById('sum').innerText = result

  })

}


function calculate(num1, num2, operator){
  //get function for calculation and return result
  return user_selected_operation(operator)(Number(num1), Number(num2))
}


function user_selected_operation(operationInput){

  //var sum: first number, which is moved to display above user input

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


function resetAll(){

  document.getElementById('sum').innerText = ""
  document.getElementById('userInput').innerText = ""
  document.getElementById('operator').innerText = ""

}


function updateResultsDisplay(number, clearDisplay){

  const resultsDisplay = document.getElementById("display")

  x = "This is just come text I'm writing and I don't think this will work out because the how does this even make sense??" 

  if (clearDisplay){

    const newDisplayText = document.createTextNode(userInput);
    userInputDisplay.appendChild(newDisplayText);

  } else {

  }

}


setUpCalcNums()
setUpOperators()
setUpEqualsButton()