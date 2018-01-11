import moment from 'moment'; // Importacion de moment
// Se encarga de saber cuales registros a mostrar asi como de filtrar y ordenars
// Timestapms en milisegundos desde midnight 1970

// Obtener los gastos visibles
const obtenerRecibosVisibles = (recibos, {currentId}) => {
    // Hacemos un llamado al metodo filter de los arreglos para determinar que elementos debemos mostrar
    return recibos.filter((elemento) => {
        // Revisa si hay una coincidencia de id
        const coincidenciaId = elemento.id.includes(currentId);
        // Regresa el elemento solo si los 3 elementos coinciden con las condiciones de los filtros
        return coincidenciaId;
    });
};
// Exportaciones de la funcion de mostrar y sort
export default obtenerRecibosVisibles;