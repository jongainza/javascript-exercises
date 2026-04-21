const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((acc,curr)=>{return acc+curr},0)
};

const multiply = function(arr) {
  return arr.reduce((acc,curr)=>{return acc*curr},1)
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(n) {
  let result = 1
 if (n<0){
    return new Error ('No factorial posible of negative numbers')
  }else{
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
  }

  return result
	
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
