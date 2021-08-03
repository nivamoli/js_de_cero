// formula 
// [precio * (100 - descuento)] / 100


function calcularDescuento(precioOriginal, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento; 
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100; 
    alert(`El precio a pagar con el descuento aplicado es de: ${precioConDescuento} dolares`)
}


function devolverPrecioConDescuento () {
    const inputPrecio = document.getElementById('precio');
    const precio = inputPrecio.value;
    const inputDescuento = document.getElementById('descuento')
    const descuento = inputDescuento.value;
    const valorProducto = calcularDescuento(precio, descuento)
    return valorProducto;
}
