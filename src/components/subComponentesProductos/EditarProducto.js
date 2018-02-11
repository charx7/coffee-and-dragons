import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import {empiezaEditarProducto,
        empiezaNuevoProducto,
        empiezaEliminarProducto } from '../../acciones/productos';

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

    manejaCambioCategoria = (e) => {
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
        console.log('Intentara Eliminar un Producto');
        // Accion de dispatch un query de delete
        if(!this.props.currentProducto._id) {
            alert('Tiene que escoger un producto para eliminar');
        } else {
            // Verifica si el id a eliminar esta agregado en un recibo para salir de la funcion
            let condicionEliminar = this.props.recibos.some((elemento) => {
                let condicionExit = elemento.idProductos.some((elementoInterno) => {
                    if (elementoInterno == this.props.currentProducto._id){
                        alert('No se puede eliminar un producto que esta actualmente en un recibo!');
                        return true;
                    }
                });
                console.log('Condicion para no hacer el borrado: ', condicionExit)
                if (condicionExit == true) {
                    return true
                }  
            });
            console.log('La autorizacion final para no eliminar es:', condicionEliminar);
            // Verifica si se puede eliminar o no el producto en funcion si es usado en algun recibo
            if(!condicionEliminar) {
            // Hace la eliminacio en la BDD
            this.props.dispatch(empiezaEliminarProducto(this.props.currentProducto._id));
            }
        }
    }

    submitForma = (e) => {
        e.preventDefault();
        console.log('Forma Submited sin Default');

        if(!this.props.currentProducto._id){
            // Validacion del formulario rudimentaria
            if(!this.state.descripcion || !this.state.precio || !this.state.categoria) {
                // Mandar un Alert al usuario que llene bien el formulario
                alert('Faltan datos favor de completar!');
            } else {
                // Aqui faltan validaciones de los input de los datos
                console.log('Se esta salvando un nuevo producto a la BDD');
                // Jalo del estado la cadena a procesar
                let cadenaPrecio = this.state.precio;
                let precioSinEspacios = Number(this.state.precio.toString().trim());
                console.log('la cadena convertida es: ',precioSinEspacios);
                if(!isNaN(precioSinEspacios)) {
                    this.props.dispatch(empiezaNuevoProducto({
                        descripcion: this.state.descripcion,
                        precio: precioSinEspacios,
                        imagen: this.state.imagen,
                        categoria: this.state.categoria
                    }));
                } else {
                    alert('El precio introducido es invalido (Solo numeros)');
                }
            }
        } else {
            if(!this.state.descripcion) {
                alert('Faltan datos favor de completar!');
            } else {
                // Jalo del estado la cadena
                let cadenaPrecio = this.state.precio;
                // Le quito los espacios
                let precioSinEspacios = Number(cadenaPrecio.toString().trim());
                console.log('la cadena convertida es: ',precioSinEspacios);
                if(!isNaN(precioSinEspacios)) {
                    this.props.dispatch(empiezaEditarProducto(this.props.currentProducto._id, {
                        descripcion: this.state.descripcion,
                        precio: precioSinEspacios,
                        imagen: this.state.imagen,
                        categoria: this.state.categoria
                    }));
                } else {
                    alert('El precio introducido es invalido (Solo numeros)');
                }
            }
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
                                {/*<input className='form-control'
                                    type="text" 
                                    placeholder= {this.props.currentProducto.categoria ? this.props.currentProducto.categoria : 'Categoria'}
                                    value    = {this.state.categoria}
                                    onChange = {this.manejaCambioCategoria}
                                />*/}
                                <select 
                                    value={this.state.categoria} 
                                    onChange={ this.manejaCambioCategoria }>
                                    <option value='tienda'>   Tienda</option>
                                    <option value='cafeteria'>Cafeteria</option>
                                </select>
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

const mapeoEstadoAProps = (estado, props) => {
    return {
        recibos: estado.recibos
    };
};

export default connect(mapeoEstadoAProps)(EditarProducto);