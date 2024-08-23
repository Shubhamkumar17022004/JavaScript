let arr = [];
let size = prompt("Enter the size of an array");

// Storing elements in the array
for (let i = 0; i < size; i++) {
    let store = prompt(`Enter the element ${i}`);
    arr.push(store);
}

// Reversing the array
let reversedArr = [];
for (let i = size - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}

// Output the reversed array
console.log("Reversed array is:", reversedArr);
