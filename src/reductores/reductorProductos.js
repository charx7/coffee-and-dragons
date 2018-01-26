// Reducer de los gastos
// Definimos el estado default del estado
// const reductorProductosDefault = [
//                                     {id: 1, precio: 100, descripcion: 'Nombre del producto 1', imagen:'URL1', categoria: 'categoria1'},
//                                     {id: 2, precio: 200, descripcion: 'Nombre del producto 2', imagen:'URL2', categoria: 'categoria2'},
//                                     {id: 3, precio: 50, descripcion: 'Nombre del producto 3', imagen:'URL3', categoria: 'categoria 3'},
//                                     {id: 4, precio: 10, descripcion: 'Nombre del producto 4', imagen:'URL4', categoria: 'categoria 4'},
//                                     {id: 5, precio: 10, descripcion: 'Nombre del producto 5', imagen:'URL4', categoria: 'categoria 5'},
//                                     {id: 6, precio: 10, descripcion: 'Nombre del producto 6', imagen:'URL4', categoria: 'categoria 6'}
//                                 ];
const reductorProductosDefault = [];
// Definimos el reductor como una funcion pura
const redutorProductos = (estado = reductorProductosDefault, accion) => {
    switch (accion.type){
        case 'AGREGA_PRODUCTO':
            return [
                // Otro operador para concatenar de otro manera con ...elementos, elemento a aniadir
                ...estado,
                accion.producto
            ]; 
        case 'EDITAR_PRODUCTO':
            return estado.map((elemento) => {
                if(elemento._id == accion.id) {
                    return {
                        ...elemento,
                        ...accion.actualizaciones
                    };
                } else {
                    return elemento;
                }
            });
            
        default:
        return estado; 
    }
};

// Definimos el export del archivo
export default redutorProductos;