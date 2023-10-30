// 1. Exercice : Changez la couleur de fond d'un élément lorsqu'il est cliqué.-----------------------------------------

// VARIABLES DECLARATIONS ---------------------------------

let exo1 = document.querySelector("#exo1");

// FUNCTIONS DECLARATIONS ---------------------------------

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    this.style.backgroundColor = getRandomColor();
}

// ACTUAL CODE  -------------------------------------------

if (exo1!= null) {exo1.addEventListener('click', changeColor);}



// 2. Exercice : Ajoutez un nouvel élément à une liste lorsqu'un bouton est cliqué.------------------------------------

// VARIABLES DECLARATIONS ---------------------------------

let listToIncrement = document.querySelector("#listToIncrement")
let generateNewListIteButton = document.querySelector("#generateNewListItem");
let resetListItemsButton = document.querySelector("#resetListElements");
let nbOfItems = 0;

// FUNCTIONS DECLARATIONS ---------------------------------

function addListItem() {
    listToIncrement.innerHTML += `<li class='deletable'> Element ${nbOfItems} </li>`;

    resetDeletableList();
    nbOfItems++;
}

function resetListElements() {
    listToIncrement.innerHTML = "<li class='deletable' > Element 1 </li> <li class='deletable'> Element 2 </li> <li class='deletable'> Element 3 </li>";
    resetDeletableList();
    nbOfItems = listToIncrement.children.length+1;
}

// ACTUAL CODE  -------------------------------------------

if (generateNewListIteButton!= null && resetListItemsButton!= null && listToIncrement!= null) {
    nbOfItems = listToIncrement.children.length+1
    generateNewListIteButton.addEventListener('click', addListItem);
    resetListItemsButton.addEventListener('click', resetListElements);
}



// 3. Exercice : Supprimez un élément d'une liste lorsqu'il est double-cliqué. ----------------------------------------

// VARIABLES DECLARATIONS ---------------------------------

let allDeletableElements = document.getElementsByClassName("deletable");

// FUNCTIONS DECLARATIONS ---------------------------------

function deleteSelf() {
    this.remove();
}

function resetDeletableList() {
    for (var i = 0; i < allDeletableElements.length; i++) {
        allDeletableElements[i].addEventListener('dblclick', deleteSelf);
    }
}

// ACTUAL CODE  -------------------------------------------

if (allDeletableElements!= null) {resetDeletableList();}


// 4. Exercice : Modifiez le texte d'un élément lorsqu'un champ de saisie est modifié. --------------------------------

// VARIABLES DECLARATIONS ---------------------------------

let interactiveTextOutput = document.querySelector('#interactiveTextOutput');
let interactiveTextInput = document.querySelector('#interactiveTextInput');

// FUNCTIONS DECLARATIONS ---------------------------------

function changeTextFromInput() {
    interactiveTextOutput.textContent = this.value;

    if (this.value == "") {
        interactiveTextOutput.textContent = "Votre texte appraitra ici";
    }
}

// ACTUAL CODE  -------------------------------------------

interactiveTextInput.addEventListener('input', changeTextFromInput);


// 5. Exercice : Affichez une alerte avec le texte d'un élément lorsqu'il est survolé. --------------------------------

// VARIABLES DECLARATIONS ---------------------------------

let allAlertElements = document.getElementsByClassName('alertElement');

// FUNCTIONS DECLARATIONS ---------------------------------

function showAlert(){
    message = this.textContent;
    alert(message);
}

function resetAlertElementsList() {
    for (var i = 0; i < allAlertElements.length; i++) {
        allAlertElements[i].addEventListener('mouseover', showAlert);
    }
}

// ACTUAL CODE  -------------------------------------------

if (allAlertElements!= null) {resetAlertElementsList();}


// 6. Exercice : Masquez un élément lorsqu'un bouton est cliqué. ------------------------------------------------------
function hideElements() {
    for (var i = 0; i < allAlertElements.length; i++) {
        allAlertElements[i].style.display = "none";
    }
}

function showElements() {
    for (var i = 0; i < allAlertElements.length; i++) {
        allAlertElements[i].style.display = "inline-block";
    }
}

document.getElementById("hideElements").addEventListener('click', hideElements);
document.getElementById("showElements").addEventListener('click', showElements);

// 7. Exercice : Ajoutez une classe à un élément lorsqu'il est survolé. -----------------------------------------------


// 8. Exercice : Modifiez la taille de la police d'un élément lorsqu'un curseur est déplacé. --------------------------


// 9. Exercice : Changez l'image d'un élément lorsqu'elle est survolée. -----------------------------------------------

// VARIABLES DECLARATIONS ---------------------------------
let allImagesToSwitch = document.querySelectorAll("img");

// FUNCTIONS DECLARATIONS ---------------------------------

function changeImagefromAtoB() {
    this.src = this.src.replace("A.png", "B.png");
}

function changeImagefromBtoA() {
    this.src = this.src.replace("B.png", "A.png");
}

function addEventListenerToChangeImage() {
    for (var i = 0; i < allImagesToSwitch.length; i++) {
        allImagesToSwitch[i].addEventListener('mouseenter', changeImagefromAtoB);
        allImagesToSwitch[i].addEventListener('mouseout', changeImagefromBtoA);
    }
}

// ACTUAL CODE  -------------------------------------------
addEventListenerToChangeImage();
