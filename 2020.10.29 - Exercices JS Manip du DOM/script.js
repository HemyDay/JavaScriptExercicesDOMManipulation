// 1. Exercice : Changez la couleur de fond d'un élément lorsqu'il est cliqué.-----------------------------------------

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

document.getElementById("exo1").addEventListener('click', changeColor);



// 2. Exercice : Ajoutez un nouvel élément à une liste lorsqu'un bouton est cliqué.------------------------------------

let listToIncrement = document.getElementById("listToIncrement")
let nbOfItems = listToIncrement.children.length+1;

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

document.getElementById("generateNewListItem").addEventListener('click', addListItem);
document.getElementById("resetListElements").addEventListener('click', resetListElements);



// 3. Exercice : Supprimez un élément d'une liste lorsqu'il est double-cliqué. ----------------------------------------
function deleteSelf() {
    this.remove();
}

let allDeletableElements = document.getElementsByClassName('deletable');

function resetDeletableList() {
    for (var i = 0; i < allDeletableElements.length; i++) {
        allDeletableElements[i].addEventListener('dblclick', deleteSelf);
    }
}

resetDeletableList();



// 4. Exercice : Modifiez le texte d'un élément lorsqu'un champ de saisie est modifié. --------------------------------

let interactiveTextOutput = document.querySelector('#interactiveTextOutput');
let interactiveTextInput = document.querySelector('#interactiveTextInput');

function changeTextFromInput() {
    interactiveTextOutput.textContent = this.value;

    if (this.value == "") {
        interactiveTextOutput.textContent = "Votre texte appraitra ici";
    }
}

interactiveTextInput.addEventListener('input', changeTextFromInput);


// 5. Exercice : Affichez une alerte avec le texte d'un élément lorsqu'il est survolé. --------------------------------

let allAlertElements = document.getElementsByClassName('alertElement');

function showAlert(){
    message = this.textContent;
    alert(message);
}

function resetAlertElementsList() {
    for (var i = 0; i < allAlertElements.length; i++) {
        allAlertElements[i].addEventListener('mouseover', showAlert);
    }
}

resetAlertElementsList();


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

