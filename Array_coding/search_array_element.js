let arr = [];
let storee=0;
let store = prompt("Enter the size of an element");
for (let i = 0; i < store; i++) {
    let value = prompt("Enter the value of element");
    arr.push(value);
}
console.log(arr);
let ind = prompt("Enter the index value to see the value");

for(let i=0;i<store;i++)
{
     storee=arr[ind]
}
console.log(`value is ${store}`);