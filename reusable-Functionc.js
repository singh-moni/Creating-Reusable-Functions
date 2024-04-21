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
            longest = str; // Updates longest if a longer string is found
        }
    }

    return longest; // Returns the longest string
}

// Example://
const arrayOfStrings = ["Pineapple", "Organic-banana", "Mandarin-orange", "strawberry"];
console.log(longestString(arrayOfStrings)); // Output will be "Mandarin-orange"

console.log(`==========================================================================================`)

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. //
function wordsLongerThan(words, number) {
    const longerwords = [];

    for (const word of words) {
        if (word.length > number) {
            longerwords.push(word);
        }
    }

    return longerwords;
}

// Example://
const words = ['say', 'hello', 'in', 'the', 'morning'];
const number = 3;
console.log(wordsLongerThan(words, number))

console.log("=================================================================================")

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.//
/*function printNumbers(n) {
    let i = 1;
    while (i <= n) {
        console.log(i);
        i++;
    }
}

// Example usage:
const n = 10;
printNumbers(n);
*/

function printNumbersTill(n) {
    if (n <= 0) {
        return;
    }

    printNumbersTill(n - 1); // Recursively call the function with n - 1
    console.log(n); // Print the current value of n
}


const n = 10;
printNumbersTill(n);

console.log("====================Part-2=======================================")
//Filter the array to remove entries with an age greater than 50.//

const people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

const filteredPeople = [];
for (let i = 0; i < people.length; i++) {
    if (+people[i].age <= 50) {
        filteredPeople.push(people[i]);
    }
}

console.log(filteredPeople);

console.log(`=================================================================`)
//Map the array to change the “occupation” key to “job” and increment every age by 1.//

const modifiedPeople = people.map(person => ({
    ...person,
    job: person.occupation,
    age: (parseInt(person.age) + 1).toString()
}));

console.log(modifiedPeople);


//Use the reduce method to calculate the sum of the ages.//

const people2 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

const sumOfAges = people2.reduce((total, person, index) => total + parseInt(person.age), 0);

console.log(sumOfAges);
const averageAge = sumOfAges / people.length;

console.log(averageAge);