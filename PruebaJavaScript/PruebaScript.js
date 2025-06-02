//EJERCICIO 1
const productos = [
  { nombre: "Notebook", precio: 800 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Teclado", precio: 50 },
];

productos.forEach((item) =>{ 
    if(item.precio > 300){
        console.log("Es muy caro")
    }
    else {
    console.log("Es muy barato");
  }
   
    return
});

function obtenerPrecioPromedio(productos){
  let suma = 0;
  for (let i = 0; i < productos.length; i++) {
    suma = suma + productos[i].precio;
  }
  let promedio = suma / productos.length;
  return promedio;
}
console.log("El precio promedio es: " + obtenerPrecioPromedio(productos));

//EJERCICIO 2

let productosMayoresA100 = [];

for (let i = 0; i < productos.length; i++) {
  if (productos[i].precio > 100) {
    productosMayoresA100.push(productos[i]);
  }
}

console.log("Productos mayores a $100:");
console.log(productosMayoresA100);











//productos.forEach((item, index, array) => console.log("item",item,"index", index,"array", array))


