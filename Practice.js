function greet(name){
    return 'Hello, ' + name + ' how are you doing today?'
}


function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}
   
function exponent(a,b){
    return a ** b
}
    
function subt(a,b){
    return a - b
}

// Collatz Conjecture (3n+1)

var hotpo = function(n){
    var c = 0;
    
      while (n > 1) {
      n = n % 2 ? 3 * n + 1 : n / 2;
      c++;
    }
  
      return c;
  }

  
  const mango = (quantity, price) => {
    const multiple = Math.floor(quantity / 3);
    return price * (quantity - multiple);
  }

  function reverse(string){
    return string.split(' ').reverse().join(' ')
  }

  function makeUpperCase(str) {
    return str.toUpperCase()
  }
  
  function bmi(weight, height) {
    if(weight / height ** 2 <= 18.5) {
      return 'Underweight'
    } else if (weight / height ** 2 <= 25.0) {
      return 'Normal'
    } else if (weight / height ** 2 <= 30.0) {
      return 'Overweight'
    } else if (weight / height ** 2 > 30) {
      return 'Obese'
    }
  }

 function correct(string)
{
	return string.replace(/5/g,"S").replace(/0/g,"O").replace(/1/g,"I");
}

function printArray(array){
  return array.join();
}

function makeUpperCase(str) {
  return str.toUpperCase() // Code here
 }