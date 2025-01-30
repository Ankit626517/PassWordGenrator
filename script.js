

// Slider  Range
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbol");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".genrateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

const symbols = "!@#$%^&*()_+<>?:{},./;[]";
let password = "";
let passwordLength = 10;
let checkCount = 0;

handleSlider();

// Set password length display
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

// Set indicator color
function setIndicator(color) {
    indicator.style.backgroundColor = color;
}

// Generate random integer
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Generate random number (0-9)
function generateRandomNumber() {
    return getRndInteger(0, 10);
}

// Generate random lowercase letter
function generateRandomLowercase() {
    return String.fromCharCode(getRndInteger(97, 123));
}

// Generate random uppercase letter
function generateRandomUppercase() {
    return String.fromCharCode(getRndInteger(65, 91));
}

// Generate random symbol
function generateRandomSymbol() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

// Count checked checkboxes
function handleCheckBoxChange() {
    checkCount = Array.from(allCheckBox).filter(checkbox => checkbox.checked).length;
}

// Shuffle password characters
function shufflePassword(passwordArray) {
    for (let i = passwordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
    }
    return passwordArray.join("");
}

// Ensure password length is not less than selected options
if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
}

// Event listeners
allCheckBox.forEach(checkbox => {
    checkbox.addEventListener("change", handleCheckBoxChange);
});

inputSlider.addEventListener("input", (e) => {
    passwordLength = parseInt(e.target.value);
    handleSlider();
});

// Generate password
generateBtn.addEventListener("click", () => {
    if (checkCount <= 0) return;

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    password = "";
    let funArr = [];

    if (uppercaseCheck.checked) funArr.push(generateRandomUppercase);
    if (lowercaseCheck.checked) funArr.push(generateRandomLowercase);
    if (numberCheck.checked) funArr.push(generateRandomNumber);
    if (symbolCheck.checked) funArr.push(generateRandomSymbol);

    // Ensure one character from each selected category
    for (let i = 0; i < funArr.length; i++) {
        password += funArr[i]();
    }

    // Fill the remaining password length with random selections
    for (let i = 0; i < passwordLength - funArr.length; i++) {
        let randIndex = getRndInteger(0, funArr.length);
        password += funArr[randIndex]();
    }

    // Shuffle the password
    password = shufflePassword(Array.from(password));

    // Display password
    passwordDisplay.value = password;
});
