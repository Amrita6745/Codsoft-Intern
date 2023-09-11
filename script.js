let string="";
let buttons= document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML== '='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML== 'Cancel (X)'){
            string="";
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target)
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})
const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  
if (operator == '+') { // use + (addition) operator to add two numbers  
    result = number1 + number2;  
}  
else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers  
    result = number1 - number2;  
}  
else if (operator == '*') { // use * (multiplication) operator to multiply two numbers  
    result = number1 * number2;  
}  
else {  
    result = number1 / number2; // use / (division) operator to divide two numbers  
}  
  
// display the result of the Calculator  
window.alert(" Result is" + result);  