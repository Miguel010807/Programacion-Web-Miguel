//Manipulacion del DOM
// Nos permite interactuar con un documentos, 
//  modificar su estructura, estilo y contenido

//Sleccion de Elementos
let titulo = document.getElementById("titulo");
console.log(titulo.innerText);

//por clase(Query Selector)
let parrafo = document.querySelector(".parrafo");

//Modificacion de Contenido


//Eventos(addEventListener, onClick, onChange)

let boton = document.getElementById('boton');
boton.addEventListener("click", function () {
    alert("Boton Clickeado")
    titulo.innerHTML = "El show de truman";
    parrafo.textContent = "Nuevo texto en el parrafo";
})
