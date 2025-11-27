// Selecting elements
const inputField = document.getElementById("task-input");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Function to add a new task
addButton.addEventListener("click", function() {
    const taskValue = inputField.value.trim(); // Remove extra spaces

    // Edge Case: Check if input is empty
    if (taskValue === "") {
        alert("Please enter a task!");
        return; // Stop execution
    }

    // 1. Create the List Item (li)
    const li = document.createElement("li");

    // 2. Create a span for the text 
    const textSpan = document.createElement("span");
    textSpan.textContent = taskValue;
    textSpan.className = "task-text"; // For styling purposes

    // 3. Create "Complete" Button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "done-btn";
    
    // Logic for Complete (Toggle Class)
    completeBtn.addEventListener("click", function() {
        textSpan.classList.toggle("completed");
    });

    // 4. Create "Delete" Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "del-btn";

    // Logic for Delete (Remove Element)
    deleteBtn.addEventListener("click", function() {
        li.remove(); // Removes the li from the DOM
    });

    // 5. Append everything together
    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";
    btnGroup.append(completeBtn, deleteBtn);

    li.append(textSpan, btnGroup); // Add text and buttons to li
    taskList.append(li); // Add li to the main list

    // 6. Clear the input field
    inputField.value = "";
});