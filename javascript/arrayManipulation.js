//toString
let myArray = ['hello', 1, 2, 3, 4, true, 'hi']
console.log(myArray.toString())

//concat
let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];
let merged = arrayOne.concat(arrayTwo);
console.log(merged)

//push() (append)
let browsers = ['Chrome', 'Safari', 'Mozilla'];
browsers.push('Brave', 'IE');
console.log(browsers)

//pop()
let browsers2 = ['Chrome', 'Mozilla', 'Brave'];
browsers.pop();
console.log(browsers);

//shift() removes first items and returns it
let browsers3 = ['Chrome', 'Mozilla', 'Brave'];
console.log(browsers3.shift()) //returns Chrome
console.log(browsers3)//returns ['Mozilla', 'Brave']

//unshift() adds items(s) to the beginning of the array and changes the original
let dogs = ['Chloe', 'Indy'];
dogs.unshift('Astro');
console.log(dogs)
/** 
splice() changes the array by adding, removing, and inserting elements.
syntax = array.splice(index[, deleteCount, element1, ..., elementN]);
index is the starting point, deleteCount is the num of elements to be deleted
element1, ..., elementN is the elements to be added
after running splice(), it returns the array with the items removed and removes it from the
original array
*/

let colors = ['green', 'yellow', 'blue', 'purple'];
colors.splice(0, 3)
console.log(colors)//['purple']
//deletes ['green', 'yellow', 'blue']

//If the second parameter isn't declared, every element starting from the given index is removed. 
let colors2 = ['green', 'yellow', 'blue', 'purple'];
colors.splice(3);
console.log(colors); // ["green", "yellow", "blue"]
// deletes ['purple']

//Adding items, to add items, set the deleteCount to 0

let schedule = ['I', 'have', 'a', 'meeting', 'with'];
schedule.splice(5, 0, 'some', 'clients', 'tomorrow');//starting point is index 5
console.log(schedule.join(" "))//.join is like .toString, but you can set the separator instead of the default comma.

/**
 * slice() is similar to splice() but it returns subarrays instead of substrings
 * The method copies a given part of an array and returns that copied
 * the syntax is array.slice(start, end)
 */

let numbers = [1, 2, 3, 4];
console.log(numbers.slice(0, 3))
//returns [1, 2, 3]
console.log(numbers)

//the best way to use slice is to assign it to a variable
let message = 'congratulations';
const abbrv = message.slice(0, 7) + 's';
console.log(abbrv)

/**split() works the same as Python
 * syntax = string.split(separator, limit)
 * the separator defines how to split a string either by a comma or something else
 * the limit determines the number of splits to be carried out
 */

let firstName = 'Corey Jordan';
nameArray = firstName.split(" ")
console.log(nameArray) 

let fullName = 'Hello, my name is Corey Jordan';
nameArray2 = fullName.split(",", 2)
console.log(nameArray2)

//indexOf returns the index of and item in an array
let dogNames = ['Chloe', 'Indy', 'Astro', 'Tuna']
console.log(dogNames.indexOf('Indy'))


