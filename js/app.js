// "use strict";
let myDiv = document.querySelector('#root');
myDiv.innerHTML = `


<div id="home" >back home</div>
<div id="nextPage">next Page </div>
<br>
<form>
<label for="userName"> User Name : </label>
<input type="text" id="userName" name="userName" placeholder="enter user name">
<label for= "email"> Enter Email : </label>
<input type="text" id="email" name="email" placeholder="enter your mail">
<label for="password"> enter password : </label>
<input type="text" id="current-password" name="password" placeholder="enter password">
<button id="send" type="submit" > Click me </button>
</form>
`;

let navBar = document.createElement('navBar')





let myArr = [" "];
let jsonArr = JSON.stringify(myArr);


let home = document.getElementById('home')
let nextPage = document.getElementById('nextPage')
var userName = document.getElementById('userName').value;
var email = document.getElementById('email').value;
var password1 = document.getElementById('current-password').value;
myDiv.appendChild(navBar);
let newElem = document.createElement("div");

function myFunc() {
    myArr.push(userName, email, password);
    console.log("hello");

}

let myBtn = document.getElementById('send').addEventListener("click", myFunc);



nextPage.addEventListener("click", () => {
    location.href = '/landPage.html'
})
