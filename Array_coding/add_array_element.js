let arr = [];
let size = Number(prompt("Enter the size of the array")); // Convert the size to a number
for (let i = 0; i < size; i++) {
    let store = Number(prompt(`Enter element ${i} of the array`)); // Convert each element to a number
    arr.push(store);
}
console.log("Elements of the array are: " + arr);

let ind = Number(prompt("Enter the index value where you want to add the value")); // Convert the index to a number
let value = Number(prompt("Enter the value you want to add")); // Convert the value to a number

if (ind === -1) {
    arr.push(value); // Add value at the end of the array
} else if (ind >= 0 && ind <= arr.length) {
    arr.splice(ind, 0, value); // Add value at the specified index
} else {
    console.log("Index out of bounds");
}

console.log("Updated array: " + arr);
