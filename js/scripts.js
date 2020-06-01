//Addition Calculator

const add = function(number1, number2) {
  return number1 + number2;
  };

//Subtraction Calculator

const sub = function(number1, number2) {
  return number1 - number2;
  };

//Division Calculator

const divide = function(number1, number2) {
  return number1 / number2;
  };

//Multiplication Calculator

const multi = function(number1, number2) {
  return number1 + number2;
  };
  
  const number1 = parseInt(prompt("enter a number."));
  const number2 = parseInt(prompt("enter another number."));

  const result= add(number1, number2);
  alert(result);
