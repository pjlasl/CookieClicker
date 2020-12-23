//Upgrades

//Low Clicker Upgrade
function lowClickerClick(){
    lowPrice = localStorage.getItem("lowPrice");

    cookies = document.getElementById("cookieAmount").innerHTML;
    if (cookies -lowPrice >= 0){
	cookies - lowPrice;
	document.getElementById("cookieAmount").innerHTML = cookies;
	localStorage.setItem("cookies", cookies);
    

	lowPrice = lowPrice * 1.15 + 3;
	lowPrice = Math.round(lowPrice);
	localStorage.setItem("lowPrice", lowPrice);
	document.getElementById("lowPrice").innerHTML = lowPrice;
    
	CPS = document.getElementById("cps").innerHTML;
	CPS ++;
	document.getElementById("cps").innerHTML = CPS;
	localStorage.setItem("cps", CPS);
	autoClick();	
    }else {
	alert("not enough cookies");
    }
}

// Medium Clicker Upgrade

function mediumClickerClick(){

}

