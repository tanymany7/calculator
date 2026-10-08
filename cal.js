let currentnumber = "";
let numbers = [];
let operator = null;

function addDigit(digit){
  currentnumber += digit;
  document.getElementById("input").textContent = currentnumber;
}

function functionone() {
   addDigit('1');
   }
function functiontwo() {
   addDigit('2'); 
  }
function functionthree() {
   addDigit('3'); 
  }
function functionfour() {
   addDigit('4'); 
  }
function functionfive() {
   addDigit('5'); 
  }
function functionsix() {
   addDigit('6');
   }
function functionseven() {
   addDigit('7'); 
  }
function functioneight() {
   addDigit('8'); 
  }
function functionnine() 
{ addDigit('9'); 

}
function functionzeroo() {
   addDigit('0');
   }


   function functionPlus(){
    if(currentnumber !== ""){
      numbers.push(Number(currentnumber));
      currentnumber = "";
    }
    document.getElementById("input").textContent = " + ";
  } 


  function functionEqual(){
    if(currentnumber !== ""){
      numbers.push(Number(currentnumber));
    }

    let sum = numbers.reduce((total, num) => total + num, 0);
    document.getElementById("input").textContent = "RESULT : " + sum;
  }   

  function functionClear(){
    currentnumber = "";
    numbers = [];
    document.getElementById("input").textContent = "0";
  }