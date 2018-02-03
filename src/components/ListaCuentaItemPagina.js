import React from  'react';
import { connect } from 'react-redux'; // Redux para hacer sync con el almacen
import CuentaItemPagina from './CuentaItemPagina'; // importacion del componente individual de Gasto
import { agregarCuenta } from '../acciones/cuentas';
import NuevaCuenta from './NuevaCuenta'; // Importaciones de componente que agrega una nueva cuenta

const ListaCuentaItemPagina = (props) => (
    <div>
        {
            props.cuentas.map( (elemento) => {
                return <CuentaItemPagina 
                        key                 = {elemento.id}
                        currentIdCuenta     = {elemento.id}
                        currentActivaCuenta = {elemento.activa}
                        />
            })
        }
        {/* Componente para agregar una cuenta*/}
        <NuevaCuenta />
    </div>
);

// Funcion que se encarga de hacer las conexiones de estado a los props que se pasaran 
const mapeoEstadoaProps = (estado) => {
    return {
        // Pasa un prop al componente ListadeGastos basado en el mapeo del almacen y filtrados con la funcion de selectorGastos
        cuentas: estado.cuentas
    };
}; 

export default connect(mapeoEstadoaProps)(ListaCuentaItemPagina);
