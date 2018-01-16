export default (precios, productos) => {
    let resultadoFinal = [];
    precios.forEach((elemento) =>{
        let coincidencia = productos.filter((elementoInterno) => {
            return elemento == elementoInterno.id
        });
        console.log(coincidencia);
        resultadoFinal = [...resultadoFinal,
            ...coincidencia]
        //resultadoFinal.push(coincidencia[0]);
    });
    return resultadoFinal;
}
