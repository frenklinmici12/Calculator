const container = document.querySelector(".container");
const answerWindow = container.querySelector(".result");

const btns = document.querySelectorAll("button");

//this works but eval kinda cheating ngl so maybe go back ???

btns.forEach((button) => {
    
   button.addEventListener("click", () => {
      if(button.textContent == "AC") { //clear
         let currVal = null;
         answerWindow.textContent = currVal;
      }
      else if(button.textContent == "+" || button.textContent == "-" || button.textContent == "x"
         || button.textContent == "/") {

         let currVal = button.textContent;
         if(currVal == "x") currVal = "*";
         answerWindow.textContent += currVal;
         //setOperator(button.textContent);
      }
      else if(button.textContent == "=") {

         try {
            answerWindow.textContent = eval(answerWindow.textContent);
         }
         catch(error) {
            answerWindow.textContent = "Error";
         }
         //performCalculation();
         //  should be something like take in currVal, make substr of the stuff 
         //  on the left of the operator, and the stuff on the right, thats your number 1 and number 2, 
         // then calculate but idk yet how id do multiple operations at once (maybe recursion?)
      }
      else { //if its a digit
         let currVal = button.textContent;
         answerWindow.textContent += currVal;
      }
   });
});

