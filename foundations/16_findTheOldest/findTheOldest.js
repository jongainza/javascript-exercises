const findTheOldest = function(people) {
 const oldy = people.reduce((oldest,current)=>{
 const newDate = new Date().getFullYear();
 let oldestPerson = (oldest.yearOfDeath || newDate)-oldest.yearOfBirth;
 let currentPerson = (current.yearOfDeath || newDate)-current.yearOfBirth
 return oldestPerson>currentPerson?oldest:current
 
},people[0])
console.log(oldy)
return oldy
}


// Do not edit below this line
module.exports = findTheOldest;

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];