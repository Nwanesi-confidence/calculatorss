let output = document.getElementById("result");
document.addEventListener("keydown", keyboardInputHandler);

function calculate(value) {
    let calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
      output.value = "Can't divide 0 with 0";
      setTimeout(() => {
        output.value = "";
      }, 1300);
    } else {
      output.value = calculatedValue;
    }
  }


// Displays entered value on screen.
function display_keys(enteredValue) {
    if (!output.value) {
      output.value = "";
    }
    output.value += enteredValue;
  }

// code for handling keyboard inputs
function keyboardInputHandler(input) {
    input.preventDefault();

    if (input.key === "0"){
        output.value += "0";
    } else if (input.value === "1"){
        output.value += "1";
    } else if (input.value === "2"){
        output.value += "2";
    } else if (input.value === "3"){
        output.value += "3";
    } else if (input.value === "4"){
        output.value += "4";
    } else if (input.value === "5"){
        output.value += "5";
    } else if (input.value === "6"){
        output.value += "6";
    } else if (input.value === "7"){
        output.value += "7";
    } else if (input.value === "8"){
        output.value += "8";
    } else if (input.value === "9"){
        output.value += "9";
    }

      //operators
    if (input.key === "+") {
        output.value += "+";
      } else if (input.key === "-") {
        output.value += "-";
      } else if (input.key === "*") {
        output.value += "*";
      } else if (input.key === "/") {
        output.value += "/";
      }

       //decimal key
    if (input.key === ".") {
        output.value += ".";
    }

    //press enter to see result
    if (input.key === "Enter") {
        calculate(result.value);
    }

    //backspace for removing the last input
    if (input.key === "Backspace") {
        let resultInput = output.value;
        //remove the last element in the string
        output.value = resultInput.substring(0, output.value.length - 1);
        }
}