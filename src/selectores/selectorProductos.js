// Filtro de los productos
const obtenerProductosVisibles = (gastos, texto) => {
    return gastos.filter((elemento) => {
        
        const coincidenciaTexto = elemento.descripcion.toLowerCase().includes(texto.toLowerCase());
        return coincidenciaTexto;
    });
};

export default obtenerProductosVisibles;