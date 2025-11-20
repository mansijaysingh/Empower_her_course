const username = "Alice";
const course = "JavaScript Fundamentals";

const greeting = `Hello ${username}, welcome to the ${course}!`;
console.log(greeting);

const name = "Sam";
const age = 21;

const studentShorthand = {
    name,
    age,
    greet() {
        console.log("Hello");
    }
};

console.log("Shorthand Object:", studentShorthand);
studentShorthand.greet();

const getFullName = (first, last) => `${first} ${last}`;

const firstName = "Jane";
const lastName = "Doe";
const fullName = getFullName(firstName, lastName);

console.log(`Full name result: ${fullName}`);