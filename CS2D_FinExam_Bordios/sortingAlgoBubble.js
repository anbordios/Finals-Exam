// Initialize an empty array to store numbers
let numbers = [];

// Get 10 numbers using prompt() and push them into the new array
for (let i = 0; i < 10; i++) {
    let num = prompt(`Enter number ${i + 1} (of 10):`);
    numbers.push(Number(num));  // Convert input to number and add to array
}

// Implementation bubble sort function
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    // Use nested for loop for ioterations of the entire cycle
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        // Compare adjacent elements and swap them if needed
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`); // Log its comparison
            
            if (arr[j] > arr[j + 1]) {
                // Swap the elements if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
                console.log(`Swapped: ${arr[j]} and ${arr[j + 1]}`);
            }
        }

        // If no two elements were swapped in inner loop, the array is sorted
        if (!swapped) break;

        // Log the array after each pass
        console.log(`Array after pass ${i + 1}: ${arr.join(', ')}`);
    }
}

// Log to the console the initial array
console.log("Initial Array: " + numbers.join(', '));

bubbleSort(numbers);

console.log("Sorted Array: " + numbers.join(', ')); // Log the final sorted array
