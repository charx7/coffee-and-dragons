export default (precios, productos) => {
    
    // const precios = [
    //     1,
    //     2,
    //     1,
    // ]
        
    // const productos = [
    //     { id: 1, precio:  5 },
    //     { id: 2, precio:  8 },
    //     { id: 3, precio:  4 },
    // ];

    let resultadoFinal = [];
    precios.forEach((elemento) =>{
        let coincidencia = productos.filter((elementoInterno) => {
            return elemento == elementoInterno.id
        });
        //console.log(coincidencia);
        resultadoFinal.push(coincidencia[0].precio);
    });

    //console.log(resultadoFinal);
    let montoFinal = resultadoFinal.reduce((a,b) => {
        return a + b
    },0);
    return montoFinal;
}

// Manera de hacer el join o coincidencia de productos con precios
// const mapeoPrecios = precios.map(id => ({ id, precio: 0 }))
// let preciosModificados = [];

// mapeoPrecios.forEach((elemento) => {
//     let resultado = productos.filter((elementoInterno) => {
//         return elemento.id == elementoInterno.id
//     });
//     console.log(resultado);
//     preciosModificados.push(resultado)
// });

// console.log(preciosModificados);