const fibonacci = function(num) {
 num = +num
 let x=2;
 let secuence = [1,1];
 if (num===0){
  return 0
 }else if(num<0){
  return 'OOPS'
 }
while (x<num){
let nextNumber = secuence[secuence.length - 1] + secuence[secuence.length - 2];
secuence.push(nextNumber);
x++;
}
return secuence[secuence.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
