/* function greet(name){
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

function updateLight(current) {
  if (current === 'green')
    return 'yellow'
  else if (current === 'yellow')
    return 'red'
  else if (current === 'red')
    return 'green'
  //your code here!

}

// All Star Code Challenge #18

function strCount(str, letter){

  return str.split(letter).length-1
  
  }


  const obj = {
    key: 1,
    name: 'Muslim',
    age: 24
  }
  
  const {key, name, age} = obj
  console.log(key)


  const sumPositiveNumbers = (a, b) => {
    if(typeof a !=='number' || typeof b !== 'number') {
      return 'One of the arguments is not a number'
    }

    if(a <= 0 || b <= 0) {
      return 'Numbers are not positive'
    }

    return a + b
  }
  */

  const myArray = ['first', 'second', 'third']

  myArray.forEach((element) => {
    console.log(element)
  })

  const fff = (...params) => {console.log(...params)}

  fff(9, 4, 5)

//  Grasshopper - Terminal game combat function

function combat(health, damage) {
  return health < damage ? 0:health - damage
}

const combat = (health, damage) => Math.max(0, health - damage);


// Will there be enough space?

function enough(cap, on, wait) {
  if(cap >= wait + on) {
    return 0
  } else if(cap < wait + on) {
    return wait - (cap - on)
  }
}

// Area or Perimeter

const areaOrPerimeter = function(l , w) {
  return l == w ? l ** 2: 2 * (l + w)// Return your answer
};


// Student's Final Grade

function finalGrade (exam, projects) {
  return (exam > 90 || projects > 10) ? 100:
  (exam > 75 && projects >= 5) ? 90:
  (exam > 50 && projects >= 2) ? 75:
  0
}

// If you can't sleep, just count sheep!! 

var countSheep = function (num){
  str = ''
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`
  }
  return str
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let years = dadYearsOld - (2 * sonYearsOld);
  if( years < 0) {
     return years * -1;
     }
  return years; 
}

function pillars(numPill, dist, width) {
  let distancesInbetween = numPill - 1;
    let totalDistance = (numPill * width) + (distancesInbetween * dist * 100)
    let distance = totalDistance - (2 * width)
    return numPill === 1 ? 0 :distance;  
}

function solution(str){
  let reverse = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i]
  }
  return reverse
}

function positiveSum(arr) {
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i]<0){
      arr[i] = 0;
    }
    sum += arr[i];
  }
  
  return sum;
}

// Remove First and Last Character

function removeChar(str){
  return str.slice(1, str.length - 1)
};


function test() {
  let num = 1
  return function() {
    num--
    console.log(num)
    if(num < 0) {
      console.log('Отсчет окончен')
    }
  }
}

let arr = ['1', '2', '3', '4']

let arrMap = arr.map(function(elem) {
  return elem + '!'
})


let arr = ['1', '2', '3', '4']

let arrMap = arr.map(function(elem, index) {
  let reverse = []
  for(i = arr.length; i >= 0; i++) {
    reverse += arr[i]
  }
  return reverse
})

// Are You Playing Banjo?


function areYouPlayingBanjo(name) {
  if (name[0] == 'r' || name[0].toLowerCase() == 'r') {
    return `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
}