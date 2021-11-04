/*
Public API Repo
https://github.com/public-apis/public-apis
*/
"use strict"
const btnCat = document.querySelector(".get-cat");
const btnFox = document.querySelector(".get-fox");
const btnDog = document.querySelector(".get-dog");


const lblCat = document.querySelector(".cat");
const lblFox = document.querySelector(".fox");
const lblDog = document.querySelector(".dog");


btnCat.addEventListener("click", function(e){
    e.preventDefault();
    fetch("https://aws.random.cat/meow")
       .then(respuesta => respuesta.json()) 
       .then(resultado => {
        let IMAGESGATOS = `
        <img src = ${resultado.file} />
        `;
        lblCat.innerHTML = IMAGESGATOS; 
        }) 
});

btnFox.addEventListener("click", function(e){
    e.preventDefault();
    fetch("https://randomfox.ca/floof/")
       .then(respuesta => respuesta.json()) 
       .then(resultado => {
        let IMAGESZORROS = `
        <img src = ${resultado.image} />
        `;
        lblFox.innerHTML = IMAGESZORROS;      
        }) 
});

btnDog.addEventListener("click", function(e){
    e.preventDefault();
    fetch("https://random.dog/woof.json")
       .then(respuesta => respuesta.json()) 
       .then(resultado => {
        let IMAGESPERROS = `
        <img src = ${resultado.url} />
        `;
        lblDog.innerHTML = IMAGESPERROS; 
        }) 
});

