const convertToCelsius = function(f) {
  let c = (f-32)*5/9
  c= Number(c).toFixed(1)
  return parseFloat(c)

};

const convertToFahrenheit = function(c) {
  let f = c *9/5+32
  f=Number(f).toFixed(1)
  return parseFloat(f)

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
