import React from  'react';
import { connect } from 'react-redux'; // Redux para hacer sync con el almacen
import MesaItemPagina from './MesaItemPagina'; // importacion del componente individual de Gasto

const ListaMesaItemPagina = (props) => (
    <div>
        {
            props.mesas.map( (elemento) => {
                return <MesaItemPagina 
                        key = {elemento.id}
                        currentIdMesa = {elemento.id}
                        currentActivaMesa = {elemento.activa}
                        />
            })
        }
    </div>
);

// Funcion que se encarga de hacer las conexiones de estado a los props que se pasaran 
const mapeoEstadoaProps = (estado) => {
    return {
        // Pasa un prop al componente ListadeGastos basado en el mapeo del almacen y filtrados con la funcion de selectorGastos
        mesas: estado.mesas
    };
}; 

export default connect(mapeoEstadoaProps)(ListaMesaItemPagina);
