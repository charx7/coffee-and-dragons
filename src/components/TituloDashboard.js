import React from 'react';
import ReactDOM from 'react-dom';

const TituloDashboard = (props) => (
    <div className="jumbotron" id="tituloHeader">
        <div className="container">
            <div className="row" id="tituloTienda">
                <div className="col-md-10">
                    <h2><span className="glyphicon glyphicon-cog"></span> Coffee & Dragons
                    {" "} 
                    <small> 
                        Cafeteria y Material Didactico
                    </small>
                    </h2>
                </div>
            </div>
        </div>
    </div>
);

export default TituloDashboard;