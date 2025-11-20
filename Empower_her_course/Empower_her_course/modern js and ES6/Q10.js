const multiply = (a = 1, b = 1) => a * b;

const output1 = multiply(3, 4);
console.log(`Input: multiply(3, 4)`);
console.log(`Output: ${output1}`);

const output2 = multiply();
console.log(`Input: multiply()`);
console.log(`Output: ${output2}`);

const output3 = multiply(5);
console.log(`Input: multiply(5)`);
console.log(`Output: ${output3}`);