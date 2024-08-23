let arr=[];
let size=prompt("Enter the size of an array");
for(let i=0;i<size;i++)
{
    let store=prompt("Enter the element of an array"+ i);
    arr.push(store);
}
console.log(arr.length);