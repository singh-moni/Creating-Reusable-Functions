//Take an array of numbers and return the sum.//

function sumOfArray(numbers) {
    let sum = 0; //initializing the varialbe sum//
    for (let i = 0; i < numbers.length; i++) { // Loops through each element of the array
        sum += numbers[i]; // Add the current number at that index to sum variable
    }
    return sum; // Return the final sum
}


const numbers = [10, 20, 30, 40, 50];
console.log(`Sum of Numbers is : ${sumOfArray(numbers)}`); // Output will be 150


// Calculating the Avarage Function//
function avgOfArray(numbers) {
   
let sum1 = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum1 += numbers[i]; // Summing up all the numbers in the array
    }
    
    return sum1 / numbers.length; // Calculating the average
}

// lets apply this function in an example below ://
const numbers1 = [10, 20, 30, 40, 50];
console.log(avgOfArray(numbers)); // Output will be 30



// how to get the longest string in an array of strings//

//Take an array of strings and return the longest string.//

function longestString(strings) {
    if (strings.length === 0) {
        return null; // Return null if the array is empty
    }

    let longest = strings[0]; // Assume the first string is the longest

    for (const str of strings) {
        if (str.length > longest.length) {
            longest = str; // Update longest if a longer string is found
        }
    }

    return longest; // Return the longest string
}

// Example usage:
const arrayOfStrings = ["Pineapple", "Organic-banana", "Mandarin-orange", "strawberry"];
console.log(longestString(arrayOfStrings)); // Output will be ""