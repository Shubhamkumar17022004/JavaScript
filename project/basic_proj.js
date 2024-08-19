let fav = 'avatar';
while (true) {
    let store = prompt("please guess the fav movie or if you want to exit enter 0");
    if (store == 0) {
        break;
    }
    else if (store == 'avatar') {
        alert(" congratulation you gess fav movie correctly " + store);
        break;
    }
    else {
        alert("you guess wrong plz guess again")
    }
}