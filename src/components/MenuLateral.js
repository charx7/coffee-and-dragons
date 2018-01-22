import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'; 
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const MenuLateral = (props) => (
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
            <ListGroupItem 
                href="#" 
                active = {props.currentTareaActiva == 'ventas' ? true : false}
                onClick = {(e) => {
                    props.manejaTareaActiva('VENTAS');
                }}>
                Ventas
            </ListGroupItem>
            <ListGroupItem 
                href="#"
                active = {props.currentTareaActiva == 'productos' ? true : false}
                onClick = {(e) => {
                    props.manejaTareaActiva('PRODUCTOS');
                }}
                >
                Productos
            </ListGroupItem>
            <ListGroupItem 
                href="#" 
                active = {props.currentTareaActiva == 'historico' ? true : false}
                onClick = {(e) => {
                    props.manejaTareaActiva('HISTORICO');
                }}>
                Historico
            </ListGroupItem>
            <ListGroupItem 
                href="#" 
                disabled>
                Inventario
            </ListGroupItem>
        </ListGroup>
    </div>
);

export default MenuLateral;