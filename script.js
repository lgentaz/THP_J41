// Fonctionnalité 1  et 1-bis : footer onClick --> console.log 
var footer = document.getElementsByTagName("footer")[0];
console.log()
counter = 0;

function footerConsoleLog() {
    console.log("clique");
    counter += 1;
    console.log(" n° " + counter);
}

footer.addEventListener("click", footerConsoleLog);


// Fonctionnalité 2 : toggle burger et frites
var navbar = document.getElementsByTagName("header")[0];

function uncollapse() {
    if (navbar.firstElementChild.classList.contains("collapse")) {
        navbar.firstElementChild.classList.remove("collapse");
    } else if (!navbar.firstElementChild.classList.contains("collapse")){
        navbar.firstElementChild.classList.toggle("collapse");
    }
}

navbar.addEventListener("click", uncollapse)


//Fonctionnalité 3 : la première carte voit rouge
var editFirstCard = document.getElementsByClassName("card-body")[0];
var firstButton = editFirstCard.lastElementChild.firstElementChild.lastElementChild;

function onClickRed() {
    let cardText = editFirstCard.firstElementChild;
    cardText.style.color = "red";
}

firstButton.addEventListener("click", onClickRed);


//Fonctionnalité 4 : la deuxième carte se met au vert (aller-retour)
var editSecondCard = document.getElementsByClassName("card-body")[1];
var secondButton = editSecondCard.lastElementChild.firstElementChild.lastElementChild;

function onClickGreen() {
    let cardText = editSecondCard.firstElementChild;
    if (cardText.style.color != "green"){
        cardText.style.color = "green";
    } else if (cardText.style.color === "green"){
        cardText.style.color = "";
    }
}

secondButton.addEventListener("click", onClickGreen);


//Fonctionnalité 5 : ☢ "nucléaire" 🤯



