import React from 'react';
import ProductosItemPagina from '../ProductosItemPagina';
import ListaEgresosItem from './ListaEgresosItem';
import { connect } from 'react-redux';

class ListaEgresos extends React.Component {
    
    render () {
        return (
            <div>
                <p>Filtro de egresos</p>
                {/* Rendereo la lista de mesas */}
                <input 
                    type="text"
                    placeholder ='Texto para filtrar'
                />
                <br/>
                <br/>
                <p>Seleccione Proveedor</p>
                <select >
                    <option value='Cotsco'>   Cotsco</option>
                    <option value='Sams'>     Sams</option>
                    <option value='todos'>    Sin Filtro</option>
                </select>
                <br/>
                <br/>
                <div className='row' id='contenedorProductos'>
                    {this.props.egresos.map((elemento) => {
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
