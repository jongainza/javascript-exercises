const removeFromArray = function(arr,...args) {
return arr.filter(n=>!args.includes(n))
};

// Do not edit below this line
module.exports = removeFromArray;
