//Upgrades

//Low Clicker Upgrade
function lowClickerClick(){
    lowPrice = localStorage.getItem("lowPrice");

    cookies = document.getElementById("cookieAmount").innerHTML - lowPrice;
    document.getElementById("cookieAmount").innerHTML = cookies;
    localStorage.setItem("cookies", cookies);

    lowPrice = round(lowPrice * 1.5);
    localStorage.setItem("lowPrice", lowPrice);
    document.getElementById("lowPrice").innerHTML = lowPrice;
}

// Medium Clicker Upgrade

function mediumClickerClick(){

}
