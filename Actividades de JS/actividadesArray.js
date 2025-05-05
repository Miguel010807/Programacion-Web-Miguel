const arrayInventario = []

const producto1 = { nombre: "Monitor 144hz", precio: 150000, categoria: "Electrónica" };
const producto2 = { nombre: "Pc gaming", precio: 800000, categoria: "Electrónica" };
const producto3 = { nombre: "Mouse", precio: 15000, categoria: "Electrónica" };
const producto4 = { nombre: "Teclado", precio: 80000, categoria: "Electrónica" };

arrayInventario.push(producto1)
arrayInventario.push(producto2)
arrayInventario.push(producto3)
arrayInventario.push(producto4)

arrayInventario.forEach((producto, index) => console.log(index + 1, "producto", producto ))

const Electrónica = arrayInventario.filter((value) => value.categoria === "Electrónica");
console.log(Electrónica);

const arrayArreglo = arrayInventario.map((nombre) => {
    return nombre.nombre;
})
console.log(arrayArreglo)