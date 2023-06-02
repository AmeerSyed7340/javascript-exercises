const removeFromArray = function(array, ...num) {
    for(let number of num){
        for(i = 0; i < array.length; i++){
            if(array[i] === number){
                array.splice(i, 1);
            }
        }
    }
    return array;
};
console.log(removeFromArray([1,2,3,4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
