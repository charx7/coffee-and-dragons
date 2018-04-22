// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';


class LandingPagina extends React.Component  {
    // Constructor y estado del componente de landing
    constructor(props) {
        super(props);
        this.state = {
            infoPanelUsuario:  '',
            infoPanelPassword: ''
        }
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
        );
        // logeo en la consola
        console.log('Respuesta al logeo es: ', respuestaLogeo)
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
                                            })
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

export default LandingPagina;