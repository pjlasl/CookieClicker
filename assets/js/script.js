//All global variables
var CPS = 0;
var cookies = 0;
var lowPrice = 20;
var mediumPrice = 100;
var ClickerInterval;
var timeOut = 0;
var t;
var ticks;

//Get the amount of cookies and CoPerS from the Local Storage
function getCookiesFromLocalStorage(){
    if (localStorage.getItem("cookies") != null) {
        cookies = localStorage.getItem("cookies");
    }
    document.getElementById("cookieAmount").innerHTML = cookies;
    
    if (localStorage.getItem("cps") != null) {
	CPS = localStorage.getItem("cps");
    }
    document.getElementById("cps").innerHTML = CPS

}

function autoClick() {
    CPS = localStorage.getItem("cps");
    if (CPS >= 1 ) {
	clearInterval(t);
	ticks = 10000 / CPS;
    	t=setInterval(cookieClick,ticks);
    }
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
    
    if (localStorage.getItem("lowPrice") == null) {
	localStorage.setItem("lowPrice", lowPrice)
    }
    if (localStorage.getItem("cps") == null) {
	localStorage.setItem("cps", CPS);
    }
}
