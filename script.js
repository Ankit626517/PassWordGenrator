// Slider  Range
const inputSlider = document.querySelector("[data-lengthSlider]");

//data-lengthNumber
const lengthDisplay = document.querySelector("[data-lengthNumber]") 

//data-passwordDisplay
const passwordDisplay = document.querySelector("[data-passwordDisplay]")  

//data-copy button
const copyBtn = document.querySelector("[data-copy]") 

//data-copyMsg 
const copyMsg = document.querySelector("[data-copyMsg]") 

//#uppercase
const uppercaseCheck  = document.querySelector("#uppercase")

//#lowercase
const lowercaseCheck  = document.querySelector("#lowercase")  

// #numbers
const numberCheck  = document.querySelector("#numbers") 


// #nsymbol
const symbolCheck  = document.querySelector("#symbol")  

// indicator
const indicator  = document.querySelector("[data-indicator]") 

// genrateButton
const genrateBtn  = document.querySelector(".genrateButton")  

//allCheckBox

const allCheckBox  = document.querySelectorAll("input[type=checkbox]")  

// symnbole string
const symbols = "!@#$%^&*()_+<>?:{},./;[]  " 

let password =""
let passwordLength = 15;
handleSlider()

// set password Length 
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText  = passwordLength ;
}

// indicator 
function setIndicator(color) {
    indicator.style.backgroundColor = color;
}

// randome integer
function getRndInteger(min , max) {
 return   Math.floor(Math.random() * (max - min)) + min

    
}
//randome number  for  0 to 9
function genrateRandomNumber() {
    return getRndInteger(0,9)
    
}

// randome lowercase 
function genrateRandomLowercase() {
  return String.fromCharCode(getRndInteger(97 , 123))  
}
// randome UpperCase 
function genrateRandomUppercase() {
  return String.fromCharCode(getRndInteger(65 , 91))  
}
// genrate symbol 
function genrateRandomesymbol() {
     const randNum = getRndInteger(0 , symbols.length)
     return symbols.charAt(randNum)
}

