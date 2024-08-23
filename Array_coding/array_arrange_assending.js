let arr1=[];
let size=prompt("Enter the size of an element");
for(let i=0;i<size;i++)
{
    let store=prompt("Enter the element value");
    arr1.push(store)
}
console.log(arr1);

let short=arr1.sort()
console.log("sorting the array element" +short);
