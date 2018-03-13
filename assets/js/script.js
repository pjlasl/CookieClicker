//All global variables
var CoPerS;
var cookies = 0;
var lowPrice = 20;
var mediumPrice = 100;
var ClickerInterval;
var timeOut = 0;

//Get the amount of cookies and CoPerS from the Local Storage
function getCookiesFromLocalStorage(){
    if (localStorage.getItem("cookies") != null) {
        cookies = localStorage.getItem("cookies");
    }
    document.getElementById("cookieAmount").innerHTML = cookies;

}


function ClickInterval(){

}

//Set Cookies per second here
function CookiesPerSecond() {

}

//Cookie Clicker function and add them to Local Storage
function cookieClick(){
    cookies = document.getElementById("cookieAmount").innerHTML;
    cookies ++;
    document.getElementById("cookieAmount").innerHTML = cookies;
    localStorage.setItem("cookies", cookies);
}

//Starting function
function startingFunction() {
    getNameFromLocalStorage();
    getCookiesFromLocalStorage();

}
