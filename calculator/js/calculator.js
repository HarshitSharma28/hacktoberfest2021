<<<<<<< HEAD
function getNumber(num) {
  var input = document.getElementById("input");
  var getLastChar = input.value.toString().slice(-1);

  switch (num) {
    case 1:
      input.value += "1";
      break;
    case 2:
      input.value += "2";
      break;
    case 3:
      input.value += "3";
      break;
    case 4:
      input.value += "4";
      break;
    case 5:
      input.value += "5";
      break;
    case 6:
      input.value += "6";
      break;
    case 7:
      input.value += "7";
      break;
    case 8:
      input.value += "8";
      break;
    case 9:
      input.value += "9";
      break;
    case 0:
      input.value += "0";
      break;
    case ".":
      if (getLastChar === "." || input.value.toString().includes(".")) {
        return;
      }
      input.value += ".";
      break;
  }
}

/* clear screen CE button function */
function clearScreen() {
  document.getElementById("input").value = "";
  document.getElementById("answer").value = "";
}

/* for getting the mathematical sign operator */
function getOperand(operand) {
  var input = document.getElementById("input");
  var getLastChar = input.value.toString().slice(-1);
  if (
    getLastChar.includes("+") ||
    getLastChar.includes("-") ||
    getLastChar.includes("*") ||
    getLastChar.includes("/")
  ) {
    return;
  }
  switch (operand) {
    case "+":
      input.value += "+";
      break;
    case "-":
      input.value += "-";
      break;
    case "*":
      input.value += "*";
      break;
    case "/":
      input.value += "/";
      break;
  }
}

/* delete a digit function */
function backspace() {
  var input = document.getElementById("input");
  var x = input.value;
  if (x.length > 0) {
    x = x.substring(0, x.length - 1); /* removes the last digit */
    input.value = x;
  }
}

function compute() {
  var input = document.getElementById("input");
  ans = +eval(input.value).toFixed(11);
  document.getElementById("answer").value = "= " + ans;
}

var i = 0;
function brackets() {
  var input = document.getElementById("input");
  if (i == 0) {
    input.value += "(";
    i = 1;
  } else if (i == 1) {
    input.value += ")";
    i = 0;
  }
}

document.oncontextmenu = function () {
  return false;
};
=======
function getNumber(num) {
  var input = document.getElementById("input");
  var getLastChar = input.value.toString().slice(-1);

  switch (num) {
    case 1:
      input.value += "1";
      break;
    case 2:
      input.value += "2";
      break;
    case 3:
      input.value += "3";
      break;
    case 4:
      input.value += "4";
      break;
    case 5:
      input.value += "5";
      break;
    case 6:
      input.value += "6";
      break;
    case 7:
      input.value += "7";
      break;
    case 8:
      input.value += "8";
      break;
    case 9:
      input.value += "9";
      break;
    case 0:
      input.value += "0";
      break;
    case ".":
      if (getLastChar === "." || input.value.toString().includes(".")) {
        return;
      }
      input.value += ".";
      break;
  }
}

/* clear screen CE button function */
function clearScreen() {
  document.getElementById("input").value = "";
  document.getElementById("answer").value = "";
}

/* for getting the mathematical sign operator */
function getOperand(operand) {
  var input = document.getElementById("input");
  var getLastChar = input.value.toString().slice(-1);
  if (
    getLastChar.includes("+") ||
    getLastChar.includes("-") ||
    getLastChar.includes("*") ||
    getLastChar.includes("/")
  ) {
    return;
  }
  switch (operand) {
    case "+":
      input.value += "+";
      break;
    case "-":
      input.value += "-";
      break;
    case "*":
      input.value += "*";
      break;
    case "/":
      input.value += "/";
      break;
  }
}

/* delete a digit function */
function backspace() {
  var input = document.getElementById("input");
  var x = input.value;
  if (x.length > 0) {
    x = x.substring(0, x.length - 1); /* removes the last digit */
    input.value = x;
  }
}

function compute() {
  var input = document.getElementById("input");
  var getLastChar = input.value.toString().slice(-1);
  if (
    getLastChar.includes("+") ||
    getLastChar.includes("-") ||
    getLastChar.includes("*") ||
    getLastChar.includes("/") ||
    getLastChar.includes(".") ||
    getLastChar.includes("(") ||
    getLastChar.includes(")")
  ) {
    document.getElementById("answer").style.color = "red";
    document.getElementById("answer").value = "Error";
    return;
  }
  ans = +eval(input.value).toFixed(11);
  document.getElementById("answer").style.color = "green";
  document.getElementById("answer").value = "= " + ans;
}

var i = 0;
function brackets() {
  var input = document.getElementById("input");
  if (i == 0) {
    input.value += "(";
    i = 1;
  } else if (i == 1) {
    input.value += ")";
    i = 0;
  }
}

document.oncontextmenu = function () {
  return false;
};
>>>>>>> 616b68e05cac2f86e04670c2890886f1aed81931
