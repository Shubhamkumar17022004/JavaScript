let arr = [];
while (true) {
    let store = prompt("Enter the task what you want to do for exit press 0");
    if (store == 'add') {
        let ask = prompt("Enter the task you want to add")
        arr.push(ask);
    }
    else if (store == 'list') {
        for (let i = 0; i < arr.length; i++) {
            console.log("Index value" + i + " " + arr[i]);
        }
    }
    else if (store == 'delete') {
        let del = prompt("Enter the index value of element to delete");
        arr.splice(del, 1);
        alert("Deleted sucessfully" + del + "INDEX ");
    }
    else if (store == 0) {
        break;
    }
    else {
        prompt("plzz enter correctly");
    }
}