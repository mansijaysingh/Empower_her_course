// ================================================================
// 1. Template Literals + Expressions
// ================================================================
printSection("1. Template Literals + Expressions");

// a) Print: "5 + 7 = 12" using a template literal where the result is calculated inside ${ }.
const resultA = `5 + 7 = ${5 + 7}`;
console.log("1a) Template Literal with Expression:", resultA);

// b) Create a multi-line string using template literals (3 lines).
const multiLine = `
This is line one.
This is line two.
This is line three.
`;
console.log("1b) Multi-line String:", multiLine);

// c) Given firstName = "John" and lastName = "Doe", print the full name using a template literal.
const firstName = "John";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;
console.log("1c) Full Name:", fullName);


// ================================================================
// 2. Arrow Functions & this
// ================================================================
printSection("2. Arrow Functions & this");

// a) Convert this function into an arrow function: function square(n) { return n * n; }
const square = (n) => n * n;
console.log("2a) Arrow Function square(5):", square(5));

// b) Explain why the following logs undefined:
const obj = {
  value: 50,
  test: () => console.log(this.value)
};

console.log("2b) Arrow Function 'this' Explanation:");
console.log("Calling obj.test(): (See output below)");
obj.test();
console.log("Explanation: Arrow functions do not have their own 'this' binding. They capture 'this' from their surrounding (lexical) scope. In this global execution context, 'this' inside the arrow function refers to the global object (or 'undefined' in strict mode/modules), which does not have a 'value' property defined in the way the object does. Hence, it logs undefined.");


// c) Rewrite it using a normal function so that printing works.
const objFixed = {
  value: 50,
  // Normal functions create their own 'this' binding, which, when called as a method,
  // refers to the object itself (objFixed).
  test() {
    console.log("2c) Fixed function output:", this.value);
  }
};
objFixed.test();


// ================================================================
// 3. Rest, Spread & Copying Objects
// ================================================================
printSection("3. Rest, Spread & Copying Objects");

// a) Use spread to make a shallow copy of this object: const product = { name: "Pen", price: 10 };
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
console.log("3a) Shallow Copy:", productCopy);

// b) Merge these two objects using spread: const a = { x: 1 }; const b = { y: 2 };
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log("3b) Merged Object:", merged);

// c) Write a function maxValue(...nums) (rest operator) that returns the largest number.
const maxValue = (...nums) => {
    return Math.max(...nums); // Use spread inside Math.max
};
console.log("3c) Max Value (1, 5, 2, 8):", maxValue(1, 5, 2, 8));


// ================================================================
// 4. Destructuring & Optional Chaining
// ================================================================
printSection("4. Destructuring & Optional Chaining");

// a) Destructure to extract a and b: const arr = [10, 20, 30];
const arr = [10, 20, 30];
const [arr_a, arr_b] = arr;
console.log(`4a) Array Destructuring: a=${arr_a}, b=${arr_b}`);

// b) Destructure the object to extract brand: const laptop = { brand: "Dell", ram: "8GB" };
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log("4b) Object Destructuring:", brand);

// c) Safely access the following using optional chaining: const info = {};
const info = {};
// Access info.contact.phone. The 'contact' property is missing, so optional chaining prevents a TypeError.
const phoneNumber = info.contact?.phone;
console.log("4c) Optional Chaining (missing intermediate property):", phoneNumber);


// ================================================================
// 5. Scoping (let/var/const)
// ================================================================
printSection("5. Scoping (let/var/const)");

// a) What will this print? for (var i = 0; i < 3; i++) {} console.log(i);
for (var i = 0; i < 3; i++) {
    // i is var-scoped (function/global)
}
// i is accessible outside the loop and holds the final incremented value (3).
console.log("5a) var loop output:", i);

// b) What will this print? for (let j = 0; j < 3; j++) {} console.log(j);
try {
    for (let j = 0; j < 3; j++) {
        // j is let-scoped (block-scoped)
    }
    // This line will throw a ReferenceError
    console.log("5b) let loop output:", j);
} catch (error) {
    console.error("5b) let loop output (Error):", error.name + ": " + error.message);
}

// c) Why is const used for values that should not be reassigned?
console.log("5c) const usage: 'const' is used to declare variables whose value and reference should not be changed after initialization. It is preferred over 'let' when the variable's value is intended to remain constant throughout the block scope.");


// ================================================================
// 6. Ternary Operator – Practice
// ================================================================
printSection("6. Ternary Operator – Practice");

// a) Convert this to a ternary: if (kmph > 60) { speed = "Fast"; } else { speed = "Normal"; }
const kmph = 80;
const speed = kmph > 60 ? "Fast" : "Normal";
console.log(`6a) Speed (${kmph} km/h):`, speed);

// b) Write a ternary that prints "Adult" if age ≥ 18, else "Minor".
const age = 22;
const status = age >= 18 ? "Adult" : "Minor";
console.log(`6b) Status (Age ${age}):`, status);

// c) Write a ternary to check: Positive → "Positive" Zero → "Zero" Negative → "Negative" (Hint: use nested ternary)
const number = -5;
const sign = number > 0 ? "Positive" : (number === 0 ? "Zero" : "Negative");
console.log(`6c) Sign of ${number}:`, sign);


// ================================================================
// 7. Spread, Rest & Arrays
// ================================================================
printSection("7. Spread, Rest & Arrays");

// a) Add elements 4, 5 to this array using spread: const nums = [1,2,3];
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log("7a) Array with added elements:", newNums);

// b) Combine these arrays using spread: a = ["x","y"]; b = ["z"];
const arr_a_comb = ["x", "y"];
const arr_b_comb = ["z"];
const combinedArr = [...arr_a_comb, ...arr_b_comb];
console.log("7b) Combined Array:", combinedArr);

// c) Write a function using rest: printNames("A","B","C") → returns ["A","B","C"].
const printNames = (...names) => {
    return names; // The rest operator collects all arguments into the 'names' array
};
console.log("7c) Rest Operator (Collected Names):", printNames("A", "B", "C"));


// ================================================================
// 8. Object Destructuring & Shorthand
// ================================================================
printSection("8. Object Destructuring & Shorthand");

// a) Destructure the following: const user = { id: 101, status: "active" };
const user_obj = { id: 101, status: "active" };
const { id: userId, status } = user_obj; // Renaming id for clarity
console.log(`8a) Object Destructuring: ID=${userId}, Status=${status}`);

// b) Convert this to shorthand: const id = 101; const role = "admin"; const user = { id: id, role: role };
const id_shorthand = 101;
const role_shorthand = "admin";
const user_shorthand = {
  id_shorthand,
  role_shorthand
};
console.log("8b) Object Shorthand:", user_shorthand);

// c) Create an object using shorthand and add a method using shorthand syntax.
const name_shorthand = "Widget";
const price_shorthand = 50;
const product_shorthand = {
  name_shorthand,
  price_shorthand,
  // Method Shorthand Syntax
  getPrice() {
    return this.price_shorthand;
  }
};
console.log("8c) Object & Method Shorthand:", product_shorthand);
console.log("8c) Calling getPrice():", product_shorthand.getPrice());


// ================================================================
// 9. Template Literals (More Practice)
// ================================================================
printSection("9. Template Literals (More Practice)");

// a) Use a template literal to print today’s date using: new Date().toDateString()
const todayDate = `Today's date is: ${new Date().toDateString()}`;
console.log("9a) Date Template Literal:", todayDate);

// b) Create a template literal that prints: "Hello NAME, your score is SCORE/100"
const scoreName = "Chris";
const scoreValue = 92;
const scoreTemplate = `Hello ${scoreName}, your score is ${scoreValue}/100`;
console.log("9b) Score Template Literal:", scoreTemplate);


// ================================================================
// 10. Arrow Function Shorthands
// ================================================================
printSection("10. Arrow Function Shorthands");

// a) Convert a normal function to a one-line arrow function for addition.
const add = (a, b) => a + b;
console.log("10a) One-line Arrow Function add(3, 4):", add(3, 4));

// b) Write an arrow function isAdult(age) that returns true/false.
const isAdult = (age) => age >= 18;
console.log("10b) isAdult(15):", isAdult(15));
console.log("10b) isAdult(25):", isAdult(25));

// c) Create an arrow function double that doubles a number.
const double = n => n * 2;
console.log("10c) double(7):", double(7));


// ================================================================
// 11. Spread Operator (Arrays & Objects)
// ================================================================
printSection("11. Spread Operator (Arrays & Objects)");

// a) Clone an array using spread.
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];
console.log("11a) Cloned Array:", clonedArray);

// b) Add element 100 to the beginning of an array using spread.
const arrayB = [1, 2, 3];
const arrayStart = [100, ...arrayB];
console.log("11b) Array with element at start:", arrayStart);

// c) Merge two objects and override one property using spread.
const obj1 = { id: 1, type: "old", value: 10 };
const obj2 = { value: 99, newProp: "z" }; // Overrides 'value'
const mergedOverride = { ...obj1, ...obj2 };
console.log("11c) Merged and Overridden Object:", mergedOverride);


// ================================================================
// 12. Optional Chaining (More Practice)
// ================================================================
printSection("12. Optional Chaining (More Practice)");

// a) Access user.address.city safely:
const userA = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log("12a) Access Existing City:", userA.address?.city);

// b) Access user.job.title safely (should print undefined).
const userB = {
  name: "Bob"
  // job property is missing
};
// Optional chaining ensures that if 'job' is undefined/null, the expression stops 
// and returns undefined instead of throwing an error.
console.log("12b) Access Missing Job Title:", userB.job?.title);

// c) Write an example where optional chaining prevents a runtime error.
const dataList = [
    { id: 1, config: { timeout: 1000 } },
    { id: 2, config: null } // Intermediate property is null
];
console.log("12c) Preventing Runtime Error:");

// This would throw a TypeError for dataList[1] without ?.
const timeout1 = dataList[0].config?.timeout;
const timeout2 = dataList[1].config?.timeout;

console.log("Timeout for ID 1:", timeout1);
// This would error if it were dataList[1].config.timeout
console.log("Timeout for ID 2:", timeout2);