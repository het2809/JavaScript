const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
let example = [];
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
function writeToLog(operation, PrevResult, number, result) {
  const logEntry = {
    operation: operation,
    PrevResult: PrevResult,
    number: number,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntry);
}
function calculateResult(calculationType) {
  const initialResult = currentResult;
  let mathKey;
  if (calculationType === "ADD") {
    currentResult += parseFloat(userInput.value);
    mathKey = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= userInput.value;
    mathKey = "-";
  } else if (calculationType === "MULTIPLICATION") {
    currentResult *= userInput.value;
    mathKey = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= userInput.value;
    mathKey = "/";
  }
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLICATION" &&
      calculationType !== "DIVIDE") ||
    !userInput.value
  ) {
    return;
  }
  createAndWriteOutput(mathKey, currentResult, userInput.value);
  writeToLog(calculationType, initialResult, userInput.value, currentResult);
}
function add() {
  calculateResult("ADD");
}
function sub() {
  calculateResult("SUBTRACT");
}
function multiply() {
  calculateResult("MULTIPLICATION");
}
function divide() {
  calculateResult("DIVIDE");
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
