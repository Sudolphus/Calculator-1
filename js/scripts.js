//BUSINESS LOGIC:

const add = function(number1, number2) {
  return number1 + number2;
  };

const sub = function(number1, number2) {
  return number1 - number2;
  };

const divide = function(number1, number2) {
  return number1 / number2;
  };

const multi = function(number1, number2) {
  return number1 * number2;
  };
  

//USER INTERFACE

$(document).ready(function() {
  $("form#num").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#num1").val());
    const number2 = parseInt($("#num2").val());
    const operation = $("#operation").val(); 
    let result;

    if (operation === "add") {
      result = add(number1, number2);
    } else if (operation === "subtract") {
      result = sub(number1, number2);
    } else if (operation === "divide") {
      result = divide(number1, number2);
    } else if (operation === "multiply") {
      result = multi(number1, number2);
    }
    
    $("#output").text(result);
  });
});

