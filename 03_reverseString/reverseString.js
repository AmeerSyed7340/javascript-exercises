const reverseString = function(string) {
    const reverseArr = Array.from(string).reverse();
    const reverseString = reverseArr.join("");
    return reverseString;
};
console.log(reverseString(`Hello mate`))
// Do not edit below this line
module.exports = reverseString;
