import React from 'react';
import ArqueoInicio from './ArqueoInicio';

class Arqueo extends React.Component {
    render () {
        return (
            <div className = 'row'>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Arqueo
                    </div>
                    <div className="panel-body">
                        <h3>
                            Hola <strong> {this.props.nombreUsuario} </strong>
                        </h3>
                        <div className='row'>    
                            <div className='col-md-6'>
                                <ArqueoInicio/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Arqueo;
