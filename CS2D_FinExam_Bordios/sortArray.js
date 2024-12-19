// Prompt the user to input the values of numbers and names inside the array
let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Merge both arrays into a single array
let merge = numbers.concat(names);
console.log(merge);

// Sort the numbers numerically in reverse order 
let sortNumbers = numbers.sort((a, b) => b - a);
console.log(sortNumbers);

// Sort the names alphabetically
let sortNames = names.sort();
console.log(sortNames);
