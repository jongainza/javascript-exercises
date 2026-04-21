const palindromes = function (str) {
let modifiedString = str.toLowerCase()
                           .replace(/\s/g, "")
                           .replace(/\p{P}/gu, "")
                           .split("");
for (let i = 0 ; i < modifiedString.length ; i++){
 
 if (modifiedString[i]!==modifiedString[modifiedString.length-1-i]){
  return false
 }
  
 
}
return true

};

// Do not edit below this line
module.exports = palindromes;
