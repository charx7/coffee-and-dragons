import moment from 'moment';
// Filtro de las compras
const obtenerComprasVisibles = (compras, texto, categoria, modoPago, fechaInicio, fechaFinal) => {
    return compras.filter((elemento) => {
        // El metodo filter devuelve el elemento siempre y cuando se complan una serie de booleanos
        // Condiciones de filtrado de categoria
        const coincidenciaCategoria = (categoria != '') ? 
            elemento.categoria.includes(categoria) 
            : true;
        // Condiciones de filtrado de modo de pago
        const coincidenciaModoPago = (modoPago != '') ? 
            elemento.modoPago.includes(modoPago) 
            : true;
        // Condiciones de filtrado de texto en descripcion (Nombre del producto de la venta) 
        const coincidenciaTexto = elemento.descripcion.toLowerCase().includes(texto.toLowerCase());
        // Condiciones de filtrado de fechas
        const creadoEnMomento = moment(elemento.fecha);
        // console.log('el momento es: ', creadoEnMomento, 'la fecha es: ', fechaInicio,fechaFinal);
        const coincidenciaFechaInicio = fechaInicio ? fechaInicio.isSameOrBefore(creadoEnMomento, 'day') : true;
        const coincidenciaFechaFinal  = fechaFinal ? fechaFinal.isSameOrAfter(creadoEnMomento, 'day'): true;
        // Cuando todos son true del elemento en cuestion devuelve el elemento si no lo filtra
        return coincidenciaTexto && coincidenciaCategoria && coincidenciaModoPago && coincidenciaFechaInicio && coincidenciaFechaFinal;
    });
};

export default obtenerComprasVisibles;
