var producto1 = {
    id: 1,
    producto: "combo pestañas",
    marca: "generico",
    precio: 3500,
    cantidad: 1
}

var producto2 = {
    id: 2,
    producto: "molde silicona",
    marca: "generico",
    precio: 2000,
    cantidad: 1
}
var producto3 = {
    id: 3,
    producto: "kit mirada perfecta",
    marca: "generico",
    precio: 2000,
    cantidad: 1
}
var listaDeCarrito = [];

function agregarAListaCarrito(articulo) {

    if (articulo == 'producto1') listaDeCarrito.push(producto1);
    if (articulo == 'producto2') listaDeCarrito.push(producto2);
    if (articulo == 'producto3') listaDeCarrito.push(producto3);
}

function verListaCarrito() {
    let confirmacionCompra = prompt("¿Desea ver su carrito ahora? Si o No");
    confirmacionCompra = confirmacionCompra.toLowerCase();
    if (confirmacionCompra == "si") {
        let total = 0;
        for (elemento of listaDeCarrito) {
            console.log("ID: " + elemento.id + " Producto: " + elemento.producto);
            total += elemento.precio;
        }
        console.log("Son " + listaDeCarrito.length + " productos\n  Total de la compra: $" + total);
    }
}



