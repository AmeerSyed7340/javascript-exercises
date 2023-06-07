const palindromes = function (str) {
    //remember the replace function
    str = str.replace(/[\W_]/g, '').toLowerCase();
    const regular = [...str].join('');
    const reverse = [...str].reverse().join('');
    return(regular === reverse);
};
console.log(palindromes('racecar'));
// Do not edit below this line
module.exports = palindromes;
