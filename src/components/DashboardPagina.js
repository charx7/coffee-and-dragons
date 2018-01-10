// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import ListaCuentaItemPagina from "./ListaCuentaItemPagina"; // Componente de lista de mesas
import ListaProductosPagina from './ListaProductosPagina'; // Componente de lista de productos
import CarritoDeCompras from './CarritoDeCompras'; // Componente carrito de compras
import TituloDashboard from './TituloDashboard'; // Componente del titulo del dashboard
// Prueba
const DashboardPagina = () => (
    <div>
        {/* Importacion del titulo del dashboard */}
        <TituloDashboard/>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <NavLink to = "/" activeClassName = "esta-activo" exact={true}>
                        DASHBOARD
                    </NavLink>
                    <br/>
                    <div>
                        <Button bsStyle='primary'>Picame</Button>
                    </div>
                    <br/>
                    {/* Aqui van las importaciones de varios componentes*/}
                    <ListGroup>
                        <ListGroupItem href="#" active>Ventas</ListGroupItem>
                        <ListGroupItem href="#" disabled>Productos</ListGroupItem>
                        <ListGroupItem href="#" disabled>Historico</ListGroupItem>
                        <ListGroupItem href="#" disabled>Inventario</ListGroupItem>
                    </ListGroup>
                </div>
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
            </div>
        </div>
    </div>
);

export default DashboardPagina;