//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){
    // elimino la classe active dagli elemnti precedenti
    items[itemActive].classList.remove('active');
    circles[itemActive].classList.remove('active');
    //incremento il suo valore di 1
    itemActive += 1
    // se itemActive arriva 5, visualizza la prima immagine
    if (itemActive > imagesArray.length - 1){
        itemActive = 0;
    }
    //aggiungere la class active al nuovo elemento dell'array items
    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');
    
});

prev.addEventListener('click', function(){
    // elimino la classe active dagli elemnti precedenti
    items[itemActive].classList.remove('active');
    circles[itemActive].classList.remove('active');
    //incremento il suo valore di 1
    itemActive -= 1
    // se itemActive arriva a -1, visualizza l'ultima immagine 
    if (itemActive < 0){
        itemActive = 4;
    }
    //aggiungere la class active al nuovo elemento dell'array items 
    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');
})

