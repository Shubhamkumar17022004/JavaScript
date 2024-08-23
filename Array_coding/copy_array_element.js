let arr = [];
let size = Number(prompt("Enter the size of the array")); // Convert the size to a number
for (let i = 0; i < size; i++) {
    let store = Number(prompt(`Enter element ${i} of the array`)); // Convert each element to a number
    arr.push(store);
}
console.log("Elements of the first array are: " + arr);

let arr2 = [];
for (let i = 0; i < size; i++) {
    arr2.push(arr[i]);
}
console.log("Array after copying: " + arr2);
