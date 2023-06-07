const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	const sumOfArr = array.reduce((accumulator, currentVal) =>{
    return accumulator + currentVal;
  }, 0);
  return sumOfArr;
};

const multiply = function(array) {
  const multiplyArry = array.reduce((accumulator, currentVal) =>{
    return accumulator * currentVal;
  }, 1);
  return multiplyArry;
};

const power = function(a, b) {
	if(b < 0) return 'power must be bigger than 0';
  else if (b === 1) return a;
  else{    
    let num = 1;
    for(i = 0; i < b; i++){
      console.log(num);
      num*=a;      
    }
    return num;
  }
};

const factorial = function(a) {
	if(a === 0) return 1;
  else if( a === 1 || a === 2){
    return a;
  }
  else{
    let fact = 1;
    for(i = a; i > 0; i--){
      fact *= i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
