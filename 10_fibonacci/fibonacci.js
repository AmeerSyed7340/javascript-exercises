const fibonacci = function(a) {
    if(a < 1) return `OOPS`;
    else if(a == 1 || a == 2){
        return 1;
    }
    else{
        let prev = 1;
        let prevprev = 1;
        let result = 0;
        for(i = 3; i <= a; i++){
            result = prev + prevprev;
            prevprev = prev;
            prev = result;
        }
        return result;
    }
};
console.log(fibonacci('15'));
// Do not edit below this line
module.exports = fibonacci;
