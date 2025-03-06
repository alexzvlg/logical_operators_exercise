let user = "Admin";
let pass = "TheMaster";
let login = prompt("Who's there?");

if (login == user) {
    let login2 = prompt("Password?");
    if (login2 == pass) {
        alert("Welcome!");
    } else if (login2 === null || login2 === "") {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (login === null || login === "") {
    alert("Canceled");
} else {
    alert("I don't know you");
}