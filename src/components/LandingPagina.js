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
                                        this.props.history.push('/dashboard');
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