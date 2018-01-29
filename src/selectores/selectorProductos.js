// Filtro de los productos
const obtenerProductosVisibles = (gastos, texto, categoria) => {
    return gastos.filter((elemento) => {
        const coincidenciaCategoria = (categoria != '') ? 
            elemento.categoria.includes(categoria) 
            : true; 
        const coincidenciaTexto = elemento.descripcion.toLowerCase().includes(texto.toLowerCase());
        return coincidenciaTexto && coincidenciaCategoria;
    });
};

export default obtenerProductosVisibles;