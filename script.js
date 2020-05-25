// Fonctionnalité 1  et 1-bis : footer onClick --> console.log 
var footer = document.getElementsByTagName("footer")[0];
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

navbar.querySelector("button.navbar-toggler").addEventListener("click", uncollapse)


//Fonctionnalité 3 : la première carte voit rouge
var editFirstCard = document.getElementsByClassName("card-body")[0];
var firstButton = editFirstCard.lastElementChild.firstElementChild.lastElementChild;

function onClickRed() {
    let firstText = editFirstCard.firstElementChild;
    firstText.style.color = "red";
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


//Fonctionnalité 5 : "nucléaire" 🤯
function delBootstrap() {
    let mainDiv = document.querySelector("head > link");
    let bootstrap = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    if (mainDiv.href === bootstrap){
        mainDiv.href = "";
    } else {
        mainDiv.href = bootstrap;
    }
}

navbar.addEventListener("dblclick", delBootstrap);


//Fonctionnalité 6 : 
var viewButton = document.querySelectorAll('.btn-success');

viewButton.forEach(button => {
    function reduceCard() {
        var text = this.parentElement.parentElement.previousElementSibling;
        var image = text.parentElement.previousElementSibling;
        console.log(image)
        if (text.style.display != 'none') {
            text.style.display = 'none';
            image.style.height = "20%";
            image.style.width = "20%";
        } else {
            text.style.display = '';
            image.style.width = '';
        }
    }
    button.addEventListener("mouseover", reduceCard);
});

//Fonctionnalité 7 : 