// Funcion que suma los montos individuales de las compras 
// DE UN ARREGLO CON UN OBJETO DE COMPRAS
const sumaPrecioCompras = ( elemento ) => {
    // Hace un arreglo con 
    let arregloMontos = elemento.map(function(elemento) {
        // Verificar si la cantidad existe y si no poner 1 por default
        let cantidadDeCompra = 1; 
        if(elemento.cantidad) {
            cantidadDeCompra = elemento.cantidad
        }
        return elemento.precio * cantidadDeCompra;
    });
    // Sumamos usando el metodo reduce
    let sumaPrecios = arregloMontos.reduce((a,b) => {
        return a + b;
    },0);
    return sumaPrecios
};

export default sumaPrecioCompras;
