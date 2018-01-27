import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import {empiezaEditarProducto,
        empiezaNuevoProducto } from '../../acciones/productos';

class EditarProducto extends React.Component {
    
    constructor(props) {
    super(props);        
        this.state = {
            descripcion: this.props.currentProducto.descripcion ? this.props.currentProducto.descripcion : '',
            precio: this.props.currentProducto.precio ? this.props.currentProducto.precio : '',
            imagen: this.props.currentProducto.imagen ? this.props.currentProducto.imagen : '',
            categoria: this.props.currentProducto.categoria ? this.props.currentProducto.categoria : '' 
        }
    }
    
    // IMPORTANTE!!!! Metodo de life-cycle para actualizar estado en cambio de componentes
    componentDidUpdate(previousProps, previousState) {
        // Verifica si los props anteriores son diferentes a los nuevos y hace update al estado en ese caso
        if(previousProps.currentProducto.descripcion !== this.props.currentProducto.descripcion) {
          this.setState({ 
            descripcion: this.props.currentProducto.descripcion,
            precio: this.props.currentProducto.precio,
            imagen: this.props.currentProducto.imagen,
            categoria: this.props.currentProducto.categoria
        })
        }
      } 

    manjeaCambioCategoria = (e) => {
        const categoriaForma = e.target.value;
        this.setState(() => ({ categoria: categoriaForma }));
    }

    manejaCambioImagen = (e) => {
        const imagenForma = e.target.value;
        this.setState (() => ({ imagen: imagenForma }));
    }

    manejaCambioPrecio = (e) => {
        const precioForma = e.target.value;
        this.setState(() => ({ precio: precioForma }));
    }

    manejaCambioDescripcion = (e) => {
        // Recuperar el valor del input
        const descripcionForma = e.target.value;
        // Cambio del estado del componente con el objeto de la descripcion
        this.setState(() => ({
            descripcion: descripcionForma
        }));
    }

    manejaEliminarVenta = () => {
        alert('AuchXD');
        // Accion de dispatch un query de delete
    }

    submitForma = (e) => {
        e.preventDefault();
        console.log('Forma Submited sin Default');

        if(!this.props.currentProducto._id){
            // Aqui faltan validaciones de los input de los datos
            console.log('Se esta salvando un nuevo producto a la BDD');
            this.props.dispatch(empiezaNuevoProducto({
                descripcion: this.state.descripcion,
                precio: this.state.precio,
                imagen: this.state.imagen,
                categoria: this.state.categoria
            }));
        } else {
            this.props.dispatch(empiezaEditarProducto(this.props.currentProducto._id, {
                descripcion: this.state.descripcion,
                precio: this.state.precio,
                imagen: this.state.imagen,
                categoria: this.state.categoria
            }));
        }
    }

    render() {
        return (
            <div className="row">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Detalles del producto: {
                            this.props.currentProducto ? this.props.currentProducto.descripcion : ''
                        }
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.submitForma}>
                            <div className='form-group'>
                                <input 
                                    className='form-control' 
                                    type="text"
                                    placeholder={this.props.currentProducto.descripcion ? this.props.currentProducto.descripcion : 'Descripcion'}
                                    value    = {this.state.descripcion}
                                    onChange = {this.manejaCambioDescripcion}
                                />
                            </div>
                            <div className='form-group'>
                                <input className='form-control'
                                    type="text" 
                                    placeholder={this.props.currentProducto.precio ? this.props.currentProducto.precio: 'Precio'}
                                    value    = {this.state.precio}
                                    onChange = {this.manejaCambioPrecio}
                                />
                            </div>
                            <div className='form-group'>
                                <input className='form-control'
                                    type="text" 
                                    placeholder={this.props.currentProducto.imagen ? this.props.currentProducto.imagen : 'URL Imagen'}
                                    value    = {this.state.imagen}
                                    onChange = {this.manejaCambioImagen}
                                />
                            </div>
                            <div className='form-group'>
                                <input className='form-control'
                                    type="text" 
                                    placeholder= {this.props.currentProducto.categoria ? this.props.currentProducto.categoria : 'Categoria'}
                                    value    = {this.state.categoria}
                                    onChange = {this.manjeaCambioCategoria}
                                />
                            </div>
                            <div className='form-group'>
                                <input className="btn btn-lg btn-primary btn-block" type="submit" value="Guardar"/>
                            </div>
                        </form> 
                        <button 
                            className='btn btn-danger btn-lg btn-block'
                            onClick={() => {
                                this.manejaEliminarVenta();
                            }}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(EditarProducto);