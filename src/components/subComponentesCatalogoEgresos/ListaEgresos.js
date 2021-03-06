import React from 'react';
import ListaEgresosItem from './ListaEgresosItem';
import { connect } from 'react-redux';
import obtenerEgresosVisibles from '../../selectores/selectorEgresos';

class ListaEgresos extends React.Component {
    
    state = {
        datos:                  undefined,
        actualizo:              false,
        filtroEgresosTexto:     '',
        filtroEgresosProveedor: ''   
    }

    componentDidMount () {
        console.log('Empezo a jalar la lista de egresos del almacen');
        // Llamado al metodo que carga los datos del servidor
        // this.setState = (() => {
        //     return { datos: this.props.egresos }
        // });
        this.setState({
            datos: this.props.egresos
        });
    }

    manejaFiltroEgresosTexto = (e) => {
        let inputTexto = e.target.value;
        this.setState({
            filtroEgresosTexto: inputTexto
        });
    }

    manejaFiltroProveedor = (e) => {
        let inputProveedor = e.target.value;
        this.setState({
            filtroEgresosProveedor: inputProveedor
        });
    }

    render() {
        return (
            <div className = 'row'>
                <div className = "panel panel-default">
                    <div className = "panel-heading">
                        Lista de Egresos
                    </div>
                
                    <div className = "panel-body">
                        <div className = 'row'>
                            <div className = 'col-md-6'>
                                <input 
                                className='form-control'
                                type="text"
                                placeholder='Texto para filtrar'
                                value = {this.state.filtroEgresosTexto}
                                onChange = {this.manejaFiltroEgresosTexto}
                                />
                            </div>
                            <div className='col-md-6'>
                                Seleccione Categoria:
                                {' '}
                                <select
                                    value    = {this.state.filtroEgresosProveedor}
                                    onChange = {this.manejaFiltroProveedor}
                                >
                                    <option value='Sams'>   Sams</option>
                                    <option value='Cotsco'>Cotsco</option>
                                    <option value='otro'>    Otro</option>
                                </select>
                            </div>
                        </div>
                        <h3>
                            Lista de Egresos
                        </h3>
                        <div className='row' id='contenedorProductos'>

                            {
                                obtenerEgresosVisibles(this.props.egresos,this.state.filtroEgresosTexto,this.state.filtroEgresosProveedor)
                                .map((elemento) => {
                                    return <ListaEgresosItem
                                        key                         = {elemento._id}
                                        currentIdEgreso             = {elemento._id}
                                        currentPrecio               = {elemento.precio}
                                        currentDescripcion          = {elemento.descripcion}
                                        currentImagen               = {elemento.imagen}
                                        currentProveedor            = {elemento.proveedor}
                                        currentTipoEgreso           = {elemento.tipoEgreso}
                                        currentUsoDestino           = {elemento.usoDestino}
                                        currentIva                  = {elemento.iva}
                                        currentUnidadPresentacion   = {elemento.unidadPresentacion}
                                        manejaEgresoSeleccionado    = {this.props.manejaEgresoSeleccionado}
                                    />
                                })
                            }

                            <div className='col-md-2'>
                                <div className='thumbnail'>
                                    <img src='https://cdn0.iconfinder.com/data/icons/cosmo-work/40/document_new-512.png' 
                                        className='img-thumbnail' 
                                        alt="Egreso C&D"
                                        onClick = {this.props.manejaNuevoEgreso}
                                    />
                                    <p>
                                        <strong>Nuevo Egreso</strong>                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// Funcion que hace la conexion de estado del componente a los props para que se desplieguen los egresos de la BDd
const mapeoEstadoToProps = (estado, props) => {
    return {
        // Pasamos un prop llamado 'egresos' que contiene todos los egresos registrados de la BDD
        egresos: estado.egresos
    };
};


export default connect(mapeoEstadoToProps) (ListaEgresos);
