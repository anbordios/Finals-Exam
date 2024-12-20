
// Array to store empty grocery items(stack)
const grocery = [];

// Peek at the top item of the stack
function peek() {
  // Checks if the stack is empty
  if (grocery.length === 0) {
    console.log("The stack is empty.");
    return null;
  } else {
    // Return the top item without removing it
    return groceryStack[grocery.length - 1];
  }
}

// Function to add an item to the top of the stack
function push(item) {
  grocery.push(item); // Use push to add the item to the end of the array
  console.log("Grocery item added to the stack:", item);
  console.log("Current stack:", grocery);
}

// Function to remove and return the top item from the stack
function pop() {
  // Check if the stack is empty
  if (peek() === null) {
    console.log("Stack is empty. Cannot pop.");
  } else {
    // It removes and return the last item
    const item = grocery.pop();
    console.log("Item removed from the stack:", item);
    console.log("Current stack:", grocery);
  }
}

// Ask 5 grocery items from the user to be added to the stack
for (let i = 0; i < 5; i++) {
  const item = prompt("Enter grocery item " + (i + 1) + ":");
  push(item);
}
