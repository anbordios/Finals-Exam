class Node {
    constructor(value) { // The value is the received parameter
        this.value = value;  // Store the value of the node
        this.next = null;    
    }
}

class LinkedList {
    constructor() {
        this.head = null;    // The head set is initially as a null
        this.size = 0;       // Initial size is 0
    }

    // Append a new node to the class linkedlist{}
    append(value) {
        const newNode = new Node(value);  // Create a new node with the given value
        if (this.head === null) {
            // If the linkedlist is empty, set the new node as the head
            this.head = newNode;
        } else {
            // If the linkedlist is not empty, traverse to the end and add the new node
            let current = this.head;
            while (current.next !== null) {
                current = current.next; 
            }
            current.next = newNode;  // Append the new node at the end
        }
        this.size++;  // Increment the size of the linkedlist
        this.print(); // Print the current state of the linkedlist
    }

    // print the linkedlist
    print() {
        let current = this.head;
        let result = [];
        while (current !== null) {
            result.push(current.value);  // Collect the node values
            current = current.next;      // Move to the next node
        }
        console.log(result.join(' -> ')); // Print the list in a readable or undestandable format
    }
}

// Create a new LinkedList 
let list = new LinkedList();

// Append items to the list
list.append("Data Structures-Array");
list.append("Variable Type-Integer");
list.append("Sorting Algorithm-Bubble Sort");
