// Funcion que suma los montos individuales de los productos 
// DE UN ARREGLO CON UN OBJETO DE PRODUCTOS
export default ( elemento ) => {
    // Hace un arreglo con 
    let arregloMontos = elemento.map( function(elemento) {
        return elemento.precio
    });
    // Sumamos usando el metodo reduce
    let sumaPrecios = arregloMontos.reduce((a,b) => {
        return a + b
    },0);
    return sumaPrecios
}