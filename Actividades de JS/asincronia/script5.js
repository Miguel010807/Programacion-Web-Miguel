//setTimeout()
// es una funcion que recibe por parametros una funcion y un valor numero en milisegundos

const button = document.getElementById('boton')
 button.addEventListener('click', ()=> {

    setTimeout(() => {
    alert("Fui presionado hace 3 segundos")   
    }, 3000);

 })

setTimeout()




// fetch
// lo vamos a utilizar para conectarnos/consumir una api
// fetch(url, opciones)
// opciones es un opcional para pasar un objeto que le diga que tipo
// de metodo utiliza, encabezado, cuerpo, etc
//
