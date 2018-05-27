import React from 'react';
import ListaEgrososItem from './ListaEgresosItem';
import { connect } from 'react-redux';

class ListaEgresos extends React.Component {
    
    state = {
        datos:                  undefined,
        actualizo:              false,
        filtroEgresosTexto:     '',
        filtroEgresosCategoria: ''   
    }

    componentDidMount () {
        console.log('Empezo a jalar la lista de egresos del almacen');
        // Llamado al metodo que carga los datos del servidor
        this.setState = (() => {
            return { datos: this.props.egresos }
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
                                type="text"
                                placeholder='Texto para filtrar'
                                />
                            </div>
                            <div className='col-md-6'>
                                Seleccione Categoria:
                                {' '}
                                <select>
                                    <option value='sams'>   Sams</option>
                                    <option value='cotsco'>Cotsco</option>
                                    <option value='otro'>    Otro</option>
                                </select>
                            </div>
                        </div>
                        <h3>
                            Lista de Egresos
                        </h3>
                        <div className='row' id='contenedorProductos'>
                            
                            <ListaEgrososItem/>

                            <div className='col-md-2'>
                                <div className='thumbnail'>
                                    <img src='https://cdn0.iconfinder.com/data/icons/cosmo-work/40/document_new-512.png' 
                                        className='img-thumbnail' 
                                        alt=" Egreso C&D"
                                        onClick = {this.props.manejaNuevoProducto}
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
