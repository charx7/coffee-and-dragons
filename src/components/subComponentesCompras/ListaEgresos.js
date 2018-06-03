import React from 'react';
import ProductosItemPagina from '../ProductosItemPagina';
import ListaEgresosItem from './ListaEgresosItem';
import { connect } from 'react-redux';
import obtenerEgresosVisibles from '../../selectores/selectorEgresos';

class ListaEgresos extends React.Component {

    state = {
        filtroProveedor: '',
        filtroTexto:     ''
    }

    manejaCambioProveedor = (e) => {
        let filtroProveedor = e.target.value;
        this.setState({
            filtroProveedor: filtroProveedor
        });
    }
    
    manejaCambioTexto = (e) => {
        let filtroTexto = e.target.value;
        this.setState({
            filtroTexto: filtroTexto
        });
    }

    render () {
        return (
            <div>
                <p>Filtro de egresos</p>
                {/* Rendereo la lista de mesas */}
                <input 
                    type="text"
                    placeholder ='Texto para filtrar'
                    value = {this.state.filtroTexto}
                    onChange = {this.manejaCambioTexto}
                />
                <br/>
                <br/>
                <p>Seleccione Proveedor</p>
                <select 
                    value = {this.state.filtroProveedor}
                    onChange = {this.manejaCambioProveedor}
                >
                    <option value='Cotsco'>   Cotsco</option>
                    <option value='Sams'>     Sams</option>
                    <option value='otro'>    Otros</option>
                </select>
                <br/>
                <br/>
                <div className='row' id='contenedorProductos'>
                    {
                        obtenerEgresosVisibles(this.props.egresos,this.state.filtroTexto, this.state.filtroProveedor)
                        .map((elemento) => {
                        return <ListaEgresosItem
                                    key                        = {elemento._id}
                                    currentIdEgreso            = {elemento._id}
                                    currentPrecio              = {elemento.precio}
                                    currentDescripcion         = {elemento.descripcion}
                                    currentImagen              = {elemento.imagen}
                                    currentProveedor           = {elemento.proveedor}
                                    manejaAgregarEgreso        = {this.props.manejaAgregarEgreso}
                                /> 
                    })}
                </div>
            </div>
        )
    }
}

const mapeoEstadoToProps = (estado) => {
    return {
        egresos: estado.egresos
    };
};

export default connect(mapeoEstadoToProps) (ListaEgresos);
