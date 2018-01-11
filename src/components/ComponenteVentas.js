import React from 'react';
import ReactDOM from 'react-dom';
import ListaCuentaItemPagina from "./ListaCuentaItemPagina"; // Componente de lista de mesas
import ListaProductosPagina from './ListaProductosPagina'; // Componente de lista de productos
import CarritoDeCompras from './CarritoDeCompras'; // Componente carrito de compras
import { connect } from 'react-redux'; // Importacion de redux

const ComponenteVentas = (props) => (
    <div className="col-md-9">
        <div className="row">
            <div className="panel panel-default">
                <div className="panel-heading">
                    Cuentas Disponibles
                </div>
                <div className="panel-body">
                    <p>Seleccione una cuenta para registrar pedido</p>
                    {/* Rendereo la lista de mesas */}
                    <ListaCuentaItemPagina />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="panel panel-default">
                <div className="panel-heading">
                    Lista de productos
                </div>
                <div className="panel-body">
                    {/* Rendereo de la lista de productos de la tienda disponibles */}
                    <ListaProductosPagina />
                </div>
            </div>
        </div>
        {/* Rendereo del componente de carrito de compras */}
        <CarritoDeCompras
            currentCuentaActiva = {props.cuentaActiva.id}
        />
    </div>
);

// Funcion que se encarga de hacer las conexiones de estado a los props que se pasaran 
const mapeoEstadoaProps = (estado) => {
    return {
        cuentaActiva: estado.cuentas.find((cuenta) => {
            return cuenta.activa == true;
        })
    };
}; 

export default connect(mapeoEstadoaProps) (ComponenteVentas);