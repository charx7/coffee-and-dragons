import moment from 'moment';
// Filtro de las ventas
const obtenerVentasVisibles = (ventas, texto, categoria, fechaInicio, fechaFinal) => {
    return ventas.filter((elemento) => {
        // El metodo filter devuelve el elemento siempre y cuando se complan una seria de booleanos
        // Condiciones de filtrado de categoria
        const coincidenciaCategoria = (categoria != '') ? 
            elemento.categoria.includes(categoria) 
            : true;
        // Condiciones de filtrado de texto en descripcion (Nombre del producto de la venta) 
        const coincidenciaTexto = elemento.descripcion.toLowerCase().includes(texto.toLowerCase());
        // Condiciones de filtrado de fechas
        const creadoEnMomento = moment(elemento.fecha);
        // console.log('el momento es: ', creadoEnMomento, 'la fecha es: ', fechaInicio,fechaFinal);
        const coincidenciaFechaInicio = fechaInicio ? fechaInicio.isSameOrBefore(creadoEnMomento, 'day') : true;
        const coincidenciaFechaFinal  = fechaFinal ? fechaFinal.isSameOrAfter(creadoEnMomento, 'day'): true;
        // Cuando todos son true del elemento en cuestion devuelve el elemento si no lo filtra
        return coincidenciaTexto && coincidenciaCategoria && coincidenciaFechaInicio && coincidenciaFechaFinal;
    });
};

export default obtenerVentasVisibles;