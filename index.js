// Parse Integer From a String

function newParseInt(string) {

} 

console.log(newParseInt('one'), 1);
console.log(newParseInt('twenty'), 20);
console.log(newParseInt('two hundred forty-six'), 246);
console.log(newParseInt('two thousand three hundred and seventy-seven'), 2377);
console.log(newParseInt('one hundred-thousand one hundred'), 100100);
console.log(newParseInt('one million one hundred-thousand one hundred'), 1100100);
console.log(newParseInt('Nine million nine hundred-thousand nine hundred'), 9900900);
console.log(newParseInt('one hundred million one hundred thousand one hundred'), 100100100);
console.log(newParseInt("seven hundred eighty-three thousand nine hundred and nineteen"), 783919);
console.log(newParseInt('ninety-nine billion'), 99000000000);
console.log(newParseInt('eight thousand nine hundred and forty-two'), 8942);
console.log(newParseInt('twenty-six thousand three hundred and fifty-nine'), 26359);
console.log(newParseInt('thirty-four thousand eight hundred and twenty-five'), 34825);