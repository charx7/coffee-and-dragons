// Filtro de las ventas
const obtenerVentasVisibles = (ventas, texto, categoria) => {
    return ventas.filter((elemento) => {
        const coincidenciaCategoria = (categoria != '') ? 
            elemento.categoria.includes(categoria) 
            : true; 
        const coincidenciaTexto = elemento.descripcion.toLowerCase().includes(texto.toLowerCase());
        return coincidenciaTexto && coincidenciaCategoria;
    });
};

export default obtenerVentasVisibles;