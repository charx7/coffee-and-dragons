// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';

const LandingPagina = (props) => (
    <div className="container">
        <div className="col-lg-12">
            <div id="contenido">
                <h1>
                    Coffee and Dragons
                </h1>
                <h3>
                    Juegos de Mesa y Material Didactico
                </h3>
                <button onClick = { () => {
                        // Redirige a la pagina del Dashboard
                        //window.location = '/dashboard';
                        props.history.push('/dashboard');
                    }}
                    className="btn btn-default btn-lg"
                >
                    <i className="fa fa-desktop"></i>  Login
                </button>
            </div>
        </div>
    </div>
);

export default LandingPagina;