import React from 'react';
import ReactDOM from 'react-dom';
import ListaCuentaItemPagina from "./ListaCuentaItemPagina"; // Componente de lista de mesas
import ListaProductosPagina from './ListaProductosPagina'; // Componente de lista de productos
import CarritoDeCompras from './CarritoDeCompras'; // Componente carrito de compras


const ComponenteVentas = (props) => (
    <div className="col-md-9">
        <div className="row">
            <div className="panel panel-default">
                <div className="panel-heading">
                    Cuentas Disponibles
                </div>
                <div className="panel-body">
                    <p>Seleccione una mesa para registrar pedido</p>
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
        <CarritoDeCompras/>
    </div>
);

export default ComponenteVentas;