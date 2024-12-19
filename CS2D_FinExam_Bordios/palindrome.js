// Prompt the user to input the RACECAR and RECORDER
let var1 = prompt("Enter the first word:");
let var2 = prompt("Enter the second word:");
alert(var1);
alert(var2);

// Using function to reverse the string
function reverse(str) {
    return str.split('').reverse().join('');
}

// It reverse the input strings
let reversedString1 = reverse(var1);
let reversedString2 = reverse(var2);

// Log the original and the reversed strings
console.log("Original String 1: " + var1);
console.log("Reversed String 1: " + reversedString1);
console.log("Original String 2: " + var2);
console.log("Reversed String 2: " + reversedString2);

// Check if the original string is equals the reversed string
console.log((var1 === reversedString1));
console.log((var2 === reversedString2));
