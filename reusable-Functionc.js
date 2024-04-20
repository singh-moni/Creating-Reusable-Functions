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


//