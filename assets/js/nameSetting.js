var ending = "";
var NameCookie;

//Set the new name and save it in the Local Storage
function setInput(){
    input = document.getElementById('BakeryNameText').value;
    localStorage.setItem("cookie.Name", input);
}

//Checks the ending of the Bakery Name a if it has an 's' in the end
function checkEnding(name) {

    var lastChar = name.substr(-1);
    if (lastChar === "s") {
        ending = "'"
    }
    else {
        ending = "'s"
    }
    return name;
}

//Set the bakery name on the page
function setBakeryName(name) {
    if (!name){
        setInput();
    }
    if(name) {
        name = checkEnding(name);
    }else{
        ending ="";
    }
    document.getElementById('BakeryName').innerHTML = name + ending + " Bakery";
}

//Get the Bakery Name from the Local Storage
function getNameFromLocalStorage(){
    if (localStorage.getItem("cookie.Name") !== null) {
        NameCookie = localStorage.getItem("cookie.Name");
        setBakeryName(NameCookie);
    }
}
