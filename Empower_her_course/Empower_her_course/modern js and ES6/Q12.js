const getSquareAndCube = (num) => ({
    square: num * num,
    cube: num * num * num
});

const input1 = 5;
const output1 = getSquareAndCube(input1);
console.log(`Input: ${input1}, Output:`, output1);

const input2 = 10;
const output2 = getSquareAndCube(input2);
console.log(`Input: ${input2}, Output:`, output2);