// Initialize two arrays which is names and ages
let names = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let ages = [24, 65, 21, 5, 9];

// Store another array and combine names and ages into a new array of [name, age]
let combine = [];

// Loop through the arrays and combine each name with the corresponding age
for (let i = 0; i < names.length; i++) {
    combine.push([names[i], ages[i]]);
}

// Sort the combined array by age which is the second element in each pair
combine.sort((a, b) => a[1] - b[1]); 

// Log the sorted names with their respective ages
console.log("Sorted Array by Age:");
for (let i = 0; i < combine.length; i++) {
    console.log(`Name: ${combine[i][0]}, Age: ${combine[i][1]}`);
}
