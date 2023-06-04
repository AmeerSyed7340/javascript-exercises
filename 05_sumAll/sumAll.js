const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0){
        return `ERROR`;
    }
    else if(typeof num1 != `number` || typeof num2 != `number`){
        return `ERROR`;
    }
    else if(num2 > num1){
        let sum = 0;
        for(i = num1; i <= num2; i++){
            sum+=i;
        }
        return sum;
    }
    else if(num1 > num2){
        let sum = 0;
        for(i = num2; i <= num1; i++){
            sum+=i;
        }
        return sum;
    }
};
console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
