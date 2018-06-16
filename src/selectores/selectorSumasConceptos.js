// Funcion que suma los montos individuales de los conceptos 
// DE UN ARREGLO CON UN OBJETO DE PRODUCTOS/COMPRAS
export const sumaPrecioCompras = (compras) => {
    // Hace un arreglo con 
    let arregloMontos = compras.map(function(elemento) {
        if(elemento.cantidad) {
            return elemento.precio * elemento.cantidad    
        } else {
            return elemento.precio
        }
    });
    // Sumamos usando el metodo reduce
    let sumaPrecios = arregloMontos.reduce((a,b) => {
        return a + b
    },0);
    return sumaPrecios
}

export const sumaPrecioVentas = (elemento) => {
    let arregloMontos = elemento.map( function(elemento) {
        return elemento.precio
    });

    let sumaPrecios = arregloMontos.reduce((a,b) => {
        return a + b; 
    },0);

    return sumaPrecios
}
