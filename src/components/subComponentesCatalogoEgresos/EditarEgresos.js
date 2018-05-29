import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { 
    empiezaEditarEgreso
} from '../../acciones/egresos';

class EditarEgresos extends React.Component {

    // Estado que nos indica que producto hemos seleccionado
    constructor(props) {
        super(props);        
        this.state = {
            descripcion: this.props.currentEgreso.descripcion ? this.props.currentEgreso.descripcion : '',
            precio: this.props.currentEgreso.precio ? this.props.currentEgreso.precio: '',
            proveedor: this.props.currentEgreso.proveedor ? this.props.currentEgreso.proveedor: '',
            unidadPresentacion: this.props.currentEgreso.unidadPresentacion ? this.props.currentEgreso.unidadPresentacion: '',
            tipoEgreso: this.props.currentEgreso.tipoEgreso ? this.props.currentEgreso.tipoEgreso: '',
            iva: this.props.currentEgreso.iva ? this.props.currentEgreso.iva: '',
            usoDestino: this.props.currentEgreso.usoDestino ? this.props.currentEgreso.usoDestino: '',
            imagen: this.props.currentEgreso.imagen ? this.props.currentEgreso.imagen: ''
        };
    }

    // IMPORTANTE!!!! Metodo de life-cycle para actualizar estado en cambio de componentes
    componentDidUpdate(previousProps, previousState) {
        // Verifica si los props anteriores son diferentes a los nuevos y hace update al estado en ese caso
        if(previousProps.currentEgreso.descripcion !== this.props.currentEgreso.descripcion) {
            this.setState({ 
                descripcion: this.props.currentEgreso.descripcion,
                precio: this.props.currentEgreso.precio,
                proveedor: this.props.currentEgreso.proveedor,
                unidadPresentacion: this.props.currentEgreso.unidadPresentacion,
                tipoEgreso: this.props.currentEgreso.tipoEgreso,
                iva: this.props.currentEgreso.iva,
                usoDestino: this.props.currentEgreso.usoDestino,
                imagen: this.props.currentEgreso.imagen
            });
        }
    }

    manejaCambioDescripcion = (e) => {
        // Recuperar el valor del input
        const descripcionForma = e.target.value;
        // Cambio del estado del componente con el objeto de la descripcion
        this.setState(() => ({
            descripcion: descripcionForma
        }));
    }

    manejaCambioPrecio = (e) => {
        const precioForma = e.target.value;
        this.setState(() => ({
            precio: precioForma
        }));
    }

    manejaCambioProveedor = (e) => {
        const proveedorForma = e.target.value;
        this.setState(() => ({
            proveedor: proveedorForma
        }));
    }

    manejaCambioUnidadPresentacion = (e) => {
        const unidadPresentacionForma = e.target.value;
        this.setState(() => ({
            unidadPresentacion: unidadPresentacionForma
        }));
    }

    manejaCambioTipoEgreso = (e) => {
        const tipoEgresoForma = e.target.value;
        this.setState(() => ({
            tipoEgreso: tipoEgresoForma
        }));
    }

    manejaCambioIva = (e) => {
        const ivaForma = e.target.value;
        this.setState(() => ({
            iva: ivaForma
        }));
    }

    manejaCambioUsoDestino = (e) => {
        const usoDestinoForma = e.target.value;
        this.setState(() => ({
            usoDestino: usoDestinoForma
        }));
    }

    manejaCambioImagen = (e) => {
        const imagenForma = e.target.value;
        this.setState(() => ({
            imagen: imagenForma
        }));
    }

    // Metodo que se encarga del boton de guardar o modificar un egreso
    submitForma = (e) => {
        e.preventDefault();
        console.log('Forma Submited sin Default');

        if(!this.props.currentEgreso._id){
            alert('Placeholder de Nuevo Egreso');
        } else {
            if(!this.state.descripcion || !this.state.imagen || !this.state.precio || !this.state.proveedor || !this.state.unidadPresentacion || !this.state.tipoEgreso || !this.state.iva || !this.state.usoDestino) {
                alert('Faltan datos favor de completar! No entro');
            } else {
                // Jalo del estado la cadena
                let cadenaPrecio = this.state.precio;
                // Le quito los espacios
                let precioSinEspacios = Number(cadenaPrecio.toString().trim());
                console.log('la cadena convertida es: ',precioSinEspacios);
                if(!isNaN(precioSinEspacios)) {
                    this.props.dispatch(empiezaEditarEgreso(this.props.currentEgreso._id, {
                        descripcion: this.state.descripcion,
                        precio: precioSinEspacios,
                        imagen: this.state.imagen,
                        proveedor: this.state.proveedor,
                        unidadPresentacion: this.state.unidadPresentacion,
                        tipoEgreso: this.state.tipoEgreso,
                        iva: this.state.iva,
                        usoDestino: this.state.usoDestino
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
                        Detalles del egreso: {
                            this.props.currentEgreso ? this.props.currentEgreso.descripcion : ''
                        }
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.submitForma}>
                            <div className='form-group'>
                                <input 
                                    className='form-control' 
                                    type="text"
                                    placeholder = {this.props.currentEgreso.descripcion ? this.props.currentEgreso.descripcion : 'Descripcion'}
                                    value       = {this.state.descripcion}
                                    onChange    = {this.manejaCambioDescripcion}
                                />
                            </div>
                            <div className='form-group'>                                
                                <input 
                                    className='form-control' 
                                    type="text"
                                    placeholder = {this.props.currentEgreso.proveedor ? this.props.currentEgreso.proveedor : 'Proveedor'}
                                    value       = {this.state.proveedor}
                                    onChange    = {this.manejaCambioProveedor}
                                />
                            </div>
                            <div className='form-group'>                                
                                <input 
                                    className='form-control' 
                                    type="text"
                                    placeholder = {this.props.currentEgreso.precio ? this.props.currentEgreso.precio : 'Precio'}
                                    value       = {this.state.precio}
                                    onChange    = {this.manejaCambioPrecio}
                                />                    
                            </div>
                            <div className='form-group'>            
                                <input 
                                    className='form-control' 
                                    type="text"
                                    placeholder = {this.props.currentEgreso.unidadPresentacion ? this.props.currentEgreso.unidadPresentacion : 'Unidad de Presentacion'}
                                    value       = {this.state.unidadPresentacion}
                                    onChange    = {this.manejaCambioUnidadPresentacion}
                                />
                            </div>
                            <div className='form-group'>
                                <input 
                                    type="text"
                                    className='form-control'
                                    placeholder = {this.props.currentEgreso.usoDestino ? this.props.currentEgreso.usoDestino : 'Uso Destino'}
                                    value       = {this.state.usoDestino}
                                    onChange    = {this.manejaCambioUsoDestino}
                                />
                            </div>
                            <div className='form-group'>
                                <input 
                                    className='form-control' 
                                    type="text"
                                    placeholder = {this.props.currentEgreso.tipoEgreso ? this.props.currentEgreso.tipoEgreso : 'Tipo de Egreso'}
                                    value       = {this.state.tipoEgreso}
                                    onChange    = {this.manejaCambioTipoEgreso}
                                />
                            </div>
                            <div className='form-group'>
                                <input 
                                    className='form-control' 
                                    type="text"
                                    placeholder = {this.props.currentEgreso.iva ? this.props.currentEgreso.iva : 'Cantidad de IVA'}
                                    value       = {this.state.iva}
                                    onChange    = {this.manejaCambioIva}
                                />
                            </div>
                            <div className='form-group'>
                                <input 
                                    className='form-control' 
                                    type="text"
                                    placeholder = {this.props.currentEgreso.imagen ? this.props.currentEgreso.imagen : 'URL imagen'}
                                    value       = {this.state.imagen}
                                    onChange    = {this.manejaCambioImagen}
                                />
                            </div>
                            <div className = 'form-group'>
                                <select>
                                    <option value='valor1'>   Sams</option>
                                    <option value='valor2'>Cotsco</option>
                                    <option value='valor3'>  Otro</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <input className="btn btn-lg btn-primary btn-block" type="submit" value="Guardar"/>
                            </div>
                        </form> 
                        <button 
                            className='btn btn-danger btn-lg btn-block'
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect() (EditarEgresos);
