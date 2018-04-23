// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
// Importaciones de las acciones del almacen y de REDUX
import { connect } from 'react-redux';
import {intentoLogeo, fallidoLogeo, exitoLogeo, falloVerificarSesion, exitoVerificarSesion } from '../acciones/authentication';

class LandingPagina extends React.Component  {
    // Constructor y estado del componente de landing
    constructor(props) {
        super(props);
        this.state = {
            infoPanelUsuario:  '',
            infoPanelPassword: '',
            redirect:          false
        };
    }

    // Metodos manejadores de cambios de los datos de login
    manejaCambiosUsername = (e) => {
        const usernameInput = e.target.value;
        this.setState(() => ({
            infoPanelUsuario: usernameInput
        }));
    }

    manejaCambiosPassword = (e) => {
        const passwordInput = e.target.value;
        this.setState(() => ({
            infoPanelPassword: passwordInput
        }));
    }

    // Manejador asincrono del login de un usuario
    async manejaLogin(datosUsuario) {
        // Cambio en el estado para indicarle a redux que no estamos logeando
        this.props.dispatch(intentoLogeo());

        const respuestaLogeo = await fetch(
            // Direccion a donde nos vamos a conectar **DEBO DE HACER QUE EL API PASE POR EL PROXY EN WEBPACK^^
            '/api/autenticacion/login',
            // Que vamos a mandar
            {
                method: 'POST',
                body: JSON.stringify(datosUsuario),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'same-origin'
            }
        ).then((respuestaAlLogeo) => {
            if(respuestaAlLogeo.status === 200) {
                console.log('La respuesta del servidor fue: ', respuestaAlLogeo);        
                // Regresamos la respuesta de JSON que manda el servidor con los datos de usuario
                return respuestaAlLogeo.json();
            }
            return null;
            // Una vez que hayamos obtenido la respuesta la procesamos
        }).then((json) => {
            if(json) {
                // Verificamos cuales fueron los datos mandados por el servidor, despues se debe borrar esta linea en prod
                console.log('Los datos del logeo son: ', json)
                // Mandamos la accion de exito de logeo al almacen de redux 
                this.props.dispatch(exitoLogeo(json));
                // Modificamos el estado de la app donde hacemos el redirect
                this.setState({ redirect: true });
                } else {
                    // Verificamos cuales fueron los datos mandados por el servidor, despues se debe borrar esta linea en prod
                    console.log('Los datos del logeo son: ', json)
                    this.props.dispatch(fallidoLogeo(new Error('Autenticacion fallida')));
                }
            }).catch((error) =>{
                // Si hay un error lo handleamos
                this.props.dispatch(fallidoLogeo(new Error(error)));
            }).then(() => {
                // Al final cuando acaba todo redirigimos a la pagina del dashboard
                console.log('Termino proceso de logeo', this.props);
                this.props.history.push('/dashboard');
            });
    }

    render() {
        return (
            <div className="container">
                <div className="col-lg-12">
                    <div id="contenido">
                        <h1>
                            Coffee and Dragons
                        </h1>
                        <h3>
                            Juegos de Mesa y Material Didactico
                        </h3>
                        <div className='row' id='panel-login'>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3>
                                        Login 
                                    </h3>
                                </div>
                                <div className='panel-body'>
                                    <label htmlFor="userNameInput">Nombre de Usuario</label>
                                    <input
                                        id = 'usernameInput' 
                                        className='form-control' 
                                        type="text"
                                        placeholder = {'Username'}
                                        value       = {this.state.infoPanelUsuario}
                                        onChange    = {this.manejaCambiosUsername}
                                    />
                                    <br/>
                                    <label htmlFor="passwordInput">Password</label>
                                    <input 
                                        id = 'passwordInput'
                                        className='form-control' 
                                        type="text"
                                        placeholder = {'Password'}
                                        value       = {this.state.infoPanelPassword}
                                        onChange    = {this.manejaCambiosPassword}
                                    />
                                    <br/>
                                    <button onClick = { () => {
                                        // Redirige a la pagina del Dashboard
                                        //window.location = '/dashboard';
                                        //this.props.history.push('/dashboard');
                                        this.manejaLogin(
                                            {
                                                email:    this.state.infoPanelUsuario, // Por ahora tenemos las dos opciones 
                                                username: this.state.infoPanelUsuario,
                                                password: this.state.infoPanelPassword
                                            });
                                        }}
                                    className="btn btn-default btn-lg"
                                    >
                                        <i className="fa fa-desktop"></i>  Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        )
    }
}

const mapeoEstadoToProps = (estado) => {
     return {
         authentication: estado.authentication
     }
}

export default connect(mapeoEstadoToProps) (LandingPagina);