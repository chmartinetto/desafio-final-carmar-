

function Producto(nombre, stock, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
}



let productoA = new Producto("R5", 100, 1250)
let productoB = new Producto("M5", 200, 1350)
let productoC = new Producto("ME5",150, 2500)


let listaProductos = [productoA, productoB, productoC]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)


let precioTotal = 0


alert("Estos son nuestros productos: \n - " + listaNombres.join("\n - "))

//Ciclo de compra con FOR

function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calculoStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
}



let cantidadCompra = parseInt(prompt("Que cantidad de productos distintos quiere comprar:"))

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese que producto quiere comprar: \n - R5\n - M5\n -ME5")
    
    if(productoCompra.toUpperCase() == 'R5'){
        let cantidadProductoMesa = prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar:")
        calculoStock(cantidadProductoMesa, productoA.stock, productoA["precio"])
        productoA.restarStock(cantidadProductoMesa)
    }
    else if(productoCompra == 'M5'){
        let cantidadProductoSilla = prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar:")
        calculoStock(cantidadProductoSilla, productoB.stock, precioProductoB)
        productoB.restarStock(cantidadProductoSilla)
    }
    else if(productoCompra == 'ME5'){
        let cantidadProductoLampara = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:")
        calculoStock(cantidadProductoLampara, stockProductoC, precioProductoC)
        productoC.restarStock(cantidadProductoLampara)
    }
    else{
        alert("No tenemos ese producto a la venta")
    }

} 

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}
else{
    alert("Gracias por su visita!")
}

