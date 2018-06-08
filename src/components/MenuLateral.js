import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'; 
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';

class MenuLateral extends React.Component  {
    render() {
        return(
            <div className="col-md-3">
                {/* 
                <NavLink to = "/" activeClassName = "esta-activo" exact={true}>
                    DASHBOARD
                </NavLink>
                */}
                <br/>
                {/* Aqui van las importaciones de varios componentes*/}
                <ListGroup>
                    <ListGroupItem 
                        href="#" 
                        active = {this.props.currentTareaActiva == 'ventas' ? true : false}
                        onClick = {(e) => {
                            this.props.manejaTareaActiva('VENTAS');
                        }}>
                        Ventas
                    </ListGroupItem>
                    <ListGroupItem 
                        href="#"
                        active = {this.props.currentTareaActiva == 'productos' ? true : false}
                        onClick = {(e) => {
                            this.props.manejaTareaActiva('PRODUCTOS');
                        }}
                        >
                        Productos
                    </ListGroupItem>
                    {
                        this.props.authentication.esAdmin == true
                        ?
                        <ListGroupItem
                            href="#" 
                            active = {this.props.currentTareaActiva == 'historico' ? true : false}
                            onClick = {(e) => {
                                this.props.manejaTareaActiva('HISTORICO');
                            }}>
                            Historico
                        </ListGroupItem>
                        : 
                            <ListGroupItem
                                href = '#'
                                disabled>
                                Historico Ventas
                            </ListGroupItem>
                    }
                    {/* Rendereo Condicional del componente de Contabilidad segun si la persona
                        logeada es admin o no*/}
                    {   
                        this.props.authentication.esAdmin == true 
                        ?
                            <ListGroupItem 
                                href="#"
                                active = {this.props.currentTareaActiva == 'contabilidad' ? true : false } 
                                onClick = {(e) => {
                                    this.props.manejaTareaActiva('CONTABILIDAD');
                                }}
                            >
                                Contabilidad
                            </ListGroupItem>
                        :   
                            <ListGroupItem
                                href="#"
                                disabled>
                                Contabilidad
                            </ListGroupItem>
                    }
                    {
                        this.props.authentication.esAdmin == true
                        ?
                            <ListGroupItem
                                href ='#'
                                active = {this.props.currentTareaActiva == 'catalogoEgresos' ? true : false }
                                onClick = {(e) => {
                                    this.props.manejaTareaActiva('CATALOGOEGRESOS');
                                }}>
                                Catalogo de Egresos
                            </ListGroupItem>
                        :
                            <ListGroupItem
                                href="#"
                                disabled>
                                Catalogo de Egresos
                            </ListGroupItem>
                    }
                    {
                        this.props.authentication.esAdmin == true
                        ?
                            <ListGroupItem
                                href ='#'
                                active = {this.props.currentTareaActiva == 'compras' ? true : false }
                                onClick = {(e) => {
                                    this.props.manejaTareaActiva('COMPRAS');
                                }}>
                                Compras
                            </ListGroupItem>
                        :
                            <ListGroupItem
                                href="#"
                                disabled>
                                Compras
                            </ListGroupItem>
                    }
                    {
                        this.props.authentication.esAdmin == true
                        ?
                            <ListGroupItem
                                href ='#'
                                active = {this.props.currentTareaActiva == 'historicoCompras' ? true : false }
                                onClick = {(e) => {
                                    this.props.manejaTareaActiva('HISTORICOCOMPRAS');
                                }}>
                                Historico Compras
                            </ListGroupItem>
                        :
                            <ListGroupItem
                                href="#"
                                disabled>
                                Historico Compras
                            </ListGroupItem>
                    }
                </ListGroup>
            </div>
        );
    }
}

const mapeoEstadoToProps = (estado) => {
    return {
        authentication: estado.authentication
    }
}

export default connect (mapeoEstadoToProps) (MenuLateral);