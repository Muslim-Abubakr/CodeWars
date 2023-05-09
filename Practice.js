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

  