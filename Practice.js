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

 correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

 const corrections = {
	'5': 'S',
	'0': 'O',
  '1': 'I',
};

const correct = string => (
	string.replace(/[501]/g, character => corrections[character])
);

let age = prompt("Сколько Вам лет?", 18);
	
let welcome = (age < 18) ?
  () => alert('Привет!') :
  () => alert("Здравствуйте!");

welcome();

function sayHi() {   // (1) создаём
  alert( "Привет" );
}

let func = sayHi;    // (2) копируем

func(); // Привет     // (3) вызываем копию (работает)
sayHi(); // Привет    //     эта тоже все ещё работает 

Const myFunction = (a, b) => {
  Let c
  A = a + 1
  C = a + b
  Return c
}
myFunction(5, 3) // 9



let func = (arg1, arg2, ...argN) => expression;

Let medalForScore = function (score) {
	if (score < 3) {
	 return "Бронзовая";
	}
	 if (score < 7) {
	return "Серебряная";
	}
	 return "Золотая";
	};


//  Keep Hydrated!

function litres(time) {
  return Math.floor(time * 0.5);
}

function simpleMultiplication(number) {
  if(number % 2 === 0) {
    return number * 8
  } else if(number % 2 != 0) {
    return number * 9
    }// your code........
}


// Thinkful - Logic Drills: Traffic light

function updateLight(current) {
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}

// 2


