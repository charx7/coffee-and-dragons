import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { falloVerificarSesion, exitoVerificarSesion, exitoLogOut, fallidoLogOut } from '../acciones/authentication';
import { hashHistory, browserHistory } from 'react-router';

// Imports de React BS
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap'; 

class Header extends React.Component {
    // Definicion de estado
    constructor(props) {
        super(props);
        this.logOutUsuario = this.logOutUsuario.bind(this);
        this.state = {
            datosUsuario: this.props.authentication ? this.props.authentication : '' 
        };
    }
   
    // Llamamos al verificador de sesiones antes de renderear algo
    componentWillMount() {
        console.log('Llamado a la funcion asincrona de sesiones');
        // Llamado de la funcion
        this.verificaSesion();
    }

    // Codigo asincrono para verificar una sesion de usuario y no se pierda al momento de hacer refresh en el browser
    async verificaSesion() {
        console.log('Entro al metodo asincrono de verificar sesion');
        // Contactamos a la API
        await fetch (
            // A que direccion
            '/api/autenticacion/verificasesion',
            // Que vamos a mandar
            {
                method: 'GET',
                credentials: 'same-origin'
            },
        )
        .then((respuestaServidorApi) => {
            // Verificamos el estado de la respuesta
            if(respuestaServidorApi.status === 200) {
                return respuestaServidorApi.json();
            } else {
                return null;
            }
        })
        .then((json) => {
            // Despues verificamos si hay un username en el json de la respuesta
            if(json.username){
                // Mandamos a dispatchear una accion de exito al verificar sesion
                this.props.dispatch(exitoVerificarSesion(json));
            } else {
                // Mandamos a dispatchear una accion de fallo al verificar sesion
                this.props.dispatch(falloVerificarSesion());
            }
        })
        .catch((error) => {
            this.props.dispatch(falloVerificarSesion(error));
        });
    }

    // Codigo asincrono para manejar el LogOut
    async logOutUsuario () {
        // Contantamos a la api que se encarga del manejo del logout
        await fetch(
            // A que direccion
            '/api/autenticacion/logout',
            {
                method: 'GET',
                credentials: 'same-origin'
            },
        )
            .then((respuestaServidorApi) => {
                console.log("La respuesta del logout es: ", respuestaServidorApi);
                // Verificamos estado de la respuesta
                if(respuestaServidorApi.status === 200) {
                    this.props.dispatch(exitoLogOut());
                } else {
                    this.props.dispatch(fallidoLogOut(`Error: ${respuestaServidorApi.status}`));
                }
            })
            .catch((error) =>{
                this.props.dispatch(fallidoLogOut(error));
            }).then(() => {
                // Al final cuando acaba todo redirigimos a la pagina del dashboard
                console.log('Termino proceso de logout');
                this.props.history.push('/');
            });
    }

    // Redirecciona a la pagina de LOGIN
    manejaLogin = () => {
        this.props.history.push('/');
    }

    render () {
        return(    
            <header>
                <Navbar id="barraNavegacion" inverse collapseOnSelect>
                        <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Bienvenido { this.props.authentication ? this.props.authentication.nombre : '' }</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">HOME</NavItem>
                        </Nav>
                        <Nav pullRight>
                            { this.props.authentication.nombre != 'Anonimo' 
                                ? <NavItem eventKey={1} href="#" onClick = { this.logOutUsuario }>Logout</NavItem>    
                                : <NavItem eventKey={1} href="#" onClick = { this.manejaLogin } >Login</NavItem> 
                            }

                            <NavDropdown eventKey={3} title="Menu Principal" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Configuracion</MenuItem>
                                <MenuItem eventKey={3.3}>Usuarios</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Salir</MenuItem>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            </header>
        );
    }
}

const mapeoEstadoToProps = (estado) => {
    return {
        // Pasamos el prop de datos del usuario Logeado o anonimo
        authentication: estado.authentication
    };
};

export default connect(mapeoEstadoToProps)(Header);