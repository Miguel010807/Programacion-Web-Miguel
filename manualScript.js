//Metodos
const arrayNumeros = [1,2,3,4,5,6];

//push(valor) -> Agrega un elemento al final del arreglo(append de python)
arrayNumeros.push(10);
console.log(arrayNumeros[6]);



//pop -> Eliminar el ultimo valor agregado y lo guarda
//en una variable
const ultimo = arrayNumeros.pop();
console.log('ultimo', ultimo)

console.log(arrayNumeros);

//shift() -> Elimina el primer valor de un arreglo, tambien lo guarda
const primero = arrayNumeros.shift()
console.log(primero);

//unshit(valor) -> Agrega un elemento al principio del arreglo
arrayNumeros.unshift("Miguel");
console.log(arrayNumeros);


//map(funcion) -> crea un nuevo arreglo aplicando una funcion
//a cada elemento
const nuevoArreglo = arrayNumeros.map((item) => {
    return item + 1;
});

console.log(nuevoArreglo);


// filter -> Crea un nuevo array con los elementos que cumplan la
// condicion

const pares = arrayNumeros.filter((n) => n % 2 === 0);
console.log(pares);


//forEach solamente recorre un arreglo
//podes ver item, index y array completo

arrayNumeros.forEach((item, index, array) => console.log("item",item,"index", index,"array", array))
