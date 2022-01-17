const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
let zero = document.getElementById("0");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const add = document.getElementById("addition");
const multiply = document.getElementById("multiplication");
const divide = document.getElementById("division");
const subtract = document.getElementById("subtraction");
const display = document.getElementById("display");
const allNumberButtons = [
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
];
let displayValue = "";

const addFunction = (a, b) => {
  return a + b;
};

const subtractFunction = (a, b) => {
  return a - b;
};

const multiplyFunction = (a, b) => {
  return a * b;
};

const divideFunction = (a, b) => {
  return a / b;
};

for (let i = 0; i < allNumberButtons.length; i++) {
  allNumberButtons[i].addEventListener("click", function (e) {
    if (displayValue.length >= 22) {
      display.classList = "displayNumbers";
      displayValue = "ERROR - TRY AGAIN!       ";
      display.innerHTML = displayValue;
    } else {
      display.classList = "displayNumbers";
      display.innerHTML += i;
      let j = i.toString();
      displayValue += j;
    }
  });
}

add.addEventListener("click", function (e) {
  if (displayValue.length >= 22) {
    display.classList = "displayNumbers";
    displayValue = "ERROR - TRY AGAIN!       ";
    display.innerHTML = displayValue;
  } else {
    display.classList = "displayNumbers";
    display.innerHTML += "&#43;";
    displayValue += "+";
  }
});

subtract.addEventListener("click", function (e) {
  if (displayValue.length >= 22) {
    display.classList = "displayNumbers";
    displayValue = "ERROR - TRY AGAIN!       ";
    display.innerHTML = displayValue;
  } else {
    display.classList = "displayNumbers";
    display.innerHTML += "&#8722;";
    displayValue += "-";
  }
});

multiply.addEventListener("click", function (e) {
  if (displayValue.length >= 22) {
    display.classList = "displayNumbers";
    displayValue = "ERROR - TRY AGAIN!       ";
    display.innerHTML = displayValue;
  } else {
    display.classList = "displayNumbers";
    display.innerHTML += "&#215;";
    displayValue += "*";
  }
});

divide.addEventListener("click", function (e) {
  if (displayValue.length >= 22) {
    display.classList = "displayNumbers";
    displayValue = "ERROR - TRY AGAIN!       ";
    display.innerHTML = displayValue;
  } else {
    display.classList = "displayNumbers";
    display.innerHTML += "&#247;";
    displayValue += "/";
    console.log(displayValue);
  }
});

clear.addEventListener("click", function (e) {
  display.classList = "displayNumbers";
  display.innerHTML = "";
  displayValue = "";
});

function completeOperation(operation, a, b) {
  if (operation === "+") {
    return multiplyFunction(a, b);
  } else if (operation === "-") {
    return subtractFunction(a, b);
  } else if (operation === "*") {
    return multiplyFunction(a, b);
  } else {
    return divideFunction(a, b);
  }
}

let a = 0;
let b = 0;
let operator = "";
let product = 0;
let counter = true;

equals.addEventListener("click", function (e) {
  
  if(displayValue.includes("**") ||displayValue.includes("*+") || displayValue.includes("*-") || displayValue.includes("*/") || displayValue.includes("/*") ||displayValue.includes("/+") || displayValue.includes("/-") || displayValue.includes("//") || displayValue.includes("**") ||displayValue.includes("*+") || displayValue.includes("*-") || displayValue.includes("*/") ||displayValue.includes("**") ||displayValue.includes("*+") || displayValue.includes("*-") || displayValue.includes("*/") ||displayValue.includes("**") ||displayValue.includes("*+") || displayValue.includes("*-") || displayValue.includes("*/") ||displayValue.includes("+*") ||displayValue.includes("++") || displayValue.includes("+-") || displayValue.includes("+/") || displayValue.includes("**") ||displayValue.includes("*+") || displayValue.includes("*-") || displayValue.includes("*/") ||displayValue.includes("**") ||displayValue.includes("*+") || displayValue.includes("*-") || displayValue.includes("*/") ||displayValue.includes("**") ||displayValue.includes("*+") || displayValue.includes("*-") || displayValue.includes("*/") ||displayValue.includes("-*") ||displayValue.includes("-+") || displayValue.includes("--") || displayValue.includes("-/") ){
    display.classList = "displayNumbers";
    displayValue = "ERROR - TRY AGAIN!       ";
    display.innerHTML = displayValue;
  }
  else if(displayValue.length === 0){
    display.classList = "displayNumbers";
    displayValue = "ERROR - Enter Numbers!       ";
    display.innerHTML = displayValue;
  }
  else if(displayValue.includes('/0')){
    display.classList = "displayNumbers";
    displayValue = "You CANNOT divide by 0!       ";
    display.innerHTML = displayValue;
  }
  else{
  
  for (let i = 0; i < displayValue.length; i++) {
    if (
      displayValue[i] === "*" ||
      displayValue[i] === "+" ||
      displayValue[i] === "-" ||
      displayValue[i] === "/"
    ) {
      a = displayValue.substr(0, i);
      a = parseInt(a);
      operator = displayValue[i];
      displayValue = displayValue.substring(i + 1);
      counter = true;

      for (i = 0; counter === true; i++) {
        if (
          displayValue[i] === "*" ||
          displayValue[i] === "+" ||
          displayValue[i] === "-" ||
          displayValue[i] === "/"
        ) {
          counter = false;
          b = displayValue.substr(0, i);
          b = parseInt(b);
          product = completeOperation(operator, a, b);
          product = product.toString();
          displayValue = displayValue.substring(i);

          displayValue = product.concat(displayValue);
          console.log(displayValue);
        } else if (i === displayValue.length) {
          counter = false;
          b = displayValue.substr(0, i);
          b = parseInt(b);
          product = completeOperation(operator, a, b);
          product = product.toString();
          displayValue = displayValue.substring(i);
          displayValue = product.concat(displayValue);
          displayValue = displayValue.toFixed(20);
          console.log(displayValue);
        }
      }
    }
  }
  display.innerHTML = displayValue;
}
});



