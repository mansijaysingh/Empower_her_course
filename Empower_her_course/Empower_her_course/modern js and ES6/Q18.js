/**
 * * =================================================================
 * A) Scoping (let/const/var and block scope)
 * =================================================================
 * * Explanation:
 * - 'var y' is function/global scoped, so it is accessible outside the 'if' block.
 * - 'let x' is block-scoped, so it is NOT accessible outside the 'if' block, 
 * resulting in a ReferenceError.
 */

console.log("--- A) Scoping Output ---");

if (true) {
  let x = 10;
  var y = 20;
}

// OUTPUT: 20 (y is var-declared and accessible outside the block)
console.log("Output for console.log(y):", y);

// OUTPUT: ReferenceError: x is not defined (x is let-declared and block-scoped)
try {
    console.log("Output for console.log(x):", x);
} catch (error) {
    console.error("Output for console.log(x):", error.name + ": " + error.message);
}

console.log("--------------------------\n");

/**
 * * =================================================================
 * B) Optional Chaining: Accessing existing and missing properties
 * =================================================================
 * * Explanation:
 * - Accessing 'email' works normally.
 * - Accessing 'phone' (which is missing) without optional chaining returns undefined.
 * - Optional chaining is generally used for intermediate properties, but can be 
 * used on the final property as shown.
 */

console.log("--- B) Optional Chaining (Basic Access) ---");

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

// Prints: test@mail.com (Property exists)
console.log("Email (profile.user.details.email):", profile.user.details.email);

// Prints: undefined (Property is missing, but no error is thrown)
console.log("Phone (profile.user.details.phone):", profile.user.details.phone);

// Prints: undefined (Using optional chaining on the final property, but still safe)
console.log("Phone Safe (profile.user.details.phone?.):", profile.user.details.phone?.);

console.log("--------------------------\n");

/**
 * * =================================================================
 * C) Optional Chaining: Preventing Runtime Errors (TypeError)
 * =================================================================
 * * Explanation:
 * - user2.data is null. Trying to access user2.data.address without optional chaining 
 * would throw a TypeError ("Cannot read properties of null (reading 'address')").
 * - user2.data?.address?.street safely short-circuits and returns undefined.
 */

console.log("--- C) Optional Chaining (Preventing TypeError) ---");

const user1 = {
  id: 1,
  data: {
    address: {
      street: "123 Main St"
    }
  }
};

const user2 = {
  id: 2,
  data: null // 'data' is null, which would cause a runtime error without ?.
};

// Safely access a property where an intermediate link is null (user2.data)
// Prints: undefined (prevents TypeError)
console.log("User 2 Street (Safely accessed):", user2.data?.address?.street);

// Safely access a missing deep property on user1
// Prints: undefined (no error)
console.log("User 1 City (Safely accessed):", user1.data?.address?.city);

// Accessing the existing property on user1
// Prints: 123 Main St
console.log("User 1 Street (Existing property):", user1.data?.address?.street);

console.log("--------------------------");