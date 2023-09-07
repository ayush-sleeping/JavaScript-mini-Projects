document.addEventListener("DOMContentLoaded", function () {
   // Get references to HTML elements
   const inputDisplay = document.getElementById("inputDisplay");
   const resultDisplay = document.getElementById("resultDisplay");
   const buttons = document.querySelectorAll("button");

   // Initialize variables
   let currentInput = "";
   let previousInput = "";
   let operator = "";

   // Function to update the input display
   function updateInputDisplay() {
       inputDisplay.value = currentInput;
   }

   // Function to update the result display
   function updateResultDisplay(result) {
       resultDisplay.value = result;
   }

   // Add event listener for each button
   buttons.forEach(function (button) {
       button.addEventListener("click", function () {
           const buttonText = button.textContent;

           // Handle digit and decimal point input
           if (!isNaN(buttonText) || buttonText === ".") {
               currentInput += buttonText;
               updateInputDisplay();
           }
           // Handle operator input
           else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
               operator = buttonText;
               previousInput = currentInput;
               currentInput = "";
               updateInputDisplay();
           }
           // Handle equals sign input
           else if (buttonText === "=") {
               if (previousInput !== "" && currentInput !== "") {
                   const num1 = parseFloat(previousInput);
                   const num2 = parseFloat(currentInput);
                   let result;

                   // Perform the selected arithmetic operation
                   switch (operator) {
                       case "+":
                           result = num1 + num2;
                           break;
                       case "-":
                           result = num1 - num2;
                           break;
                       case "*":
                           result = num1 * num2;
                           break;
                       case "/":
                           // Check for division by zero
                           if (num2 !== 0) {
                               result = num1 / num2;
                           } else {
                               result = "Error";
                           }
                           break;
                       default:
                           result = "Error";
                           break;
                   }

                   // Update the result display
                   updateResultDisplay(result);
               }
           }
           // Handle clear input
           else if (buttonText === "C") {
               // Clear all input and reset variables
               currentInput = "";
               previousInput = "";
               operator = "";

               // Update both input and result displays
               updateInputDisplay();
               updateResultDisplay("");
           }
       });
   });
});

