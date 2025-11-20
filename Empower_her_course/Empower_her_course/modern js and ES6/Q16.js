
const isEven = (n) => n % 2 === 0;

console.log("--- Part A: isEven ---");
console.log(`isEven(4): ${isEven(4)}`);
console.log(`isEven(7): ${isEven(7)}`);

const marks = 40;
const result = marks >= 35 ? "Pass" : "Fail";

console.log("\n--- Part B: Ternary Logic ---");
console.log(`Marks: ${marks}, Result: ${result}`);

const greet = (name) => `Hello, ${name ? name : "Guest"}`;

console.log("\n--- Part C: Greet with Ternary ---");
console.log(`greet("Max"): ${greet("Max")}`);
console.log(`greet(): ${greet()}`);
console.log(`greet(null): ${greet(null)}`);