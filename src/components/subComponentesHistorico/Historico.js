import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Historico extends React.Component {
    // Estado inicial vacio
    state = {
        datos: {}
    }

    // Manda una request de asyc al servidor
    cargarProductosDelServidor =  () => {
        axios.get('/api/productos')
            .then( respuesta => {
                console.log(respuesta);
                //this.setState({ datos: respuesta })
            })
            .catch( (error)=>{
                console.log(error);
            });
    };

    componentDidMount () {
        console.log('Empezo a hacer la request');
        // Llama al metodo que carga los datos del servidor
        this.cargarProductosDelServidor();
    }
    
    render() {
        return (
            <div className="col-md-9">
                <div className='row'>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Lista de Ventas
                        </div>
                        <div className="panel-body">
                            <div className='row'>
                                <div className='col-md-6'>
                                    <input type="text" placeholder='Texto para filtrar'/>
                                </div>
                                <div className='col-md-6'>
                                    <p>PlaceHolder Filtro Calendario</p>
                                </div>
                            </div>
                            <h3>Lista de Ventas</h3>
                            <ul className='list-group'>
                                <li className='list-group-item' id='li-producto'>
                                    Aqui va contenido
                                    <p id= 'boton-en-lista'>$103.3</p>
                                </li>
                            </ul>
                            {/* Comentario */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Historico;