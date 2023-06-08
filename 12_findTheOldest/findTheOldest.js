const findTheOldest = function(array) {
    const currentDate = new Date().getFullYear();
    const oldest = array.reduce((accumulator, cVal)=>{
        const accumulatorAge = accumulator.yearOfDeath ? accumulator.yearOfDeath-accumulator.yearOfBirth : currentDate-accumulator.yearOfBirth;
        const cValAge = cVal.yearOfDeath ? cVal.yearOfDeath - cVal.yearOfBirth : currentDate - cVal.yearOfBirth;

        return accumulatorAge > cValAge ? accumulator : cVal;
        
    })
    return oldest;
};

  
const people = [
    {
        name: "Carly",
        yearOfBirth: 1066,
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
  ]
  console.log(findTheOldest(people));
  
// Do not edit below this line
module.exports = findTheOldest;
