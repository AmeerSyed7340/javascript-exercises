const repeatString = function(string, num) {
    if(num < 0){
        return `ERROR`;
    }
    strCopy = '';
    for(i = 0; i < num; i++){
        strCopy+=string;
    }
    return strCopy;
};
// Do not edit below this line
module.exports = repeatString;
