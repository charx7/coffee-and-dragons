import React from 'react';
import Caja from './Caja';
import Sobre from './Sobre';

class Saldos extends React.Component {
    render () {
        return (
        <div className = 'row'>
            <div className="panel panel-default">
                <div className="panel-heading">
                    Saldos
                </div>
                <div className="panel-body">
                    <h3>
                        <strong>
                            Saldos Pertenecientes a: [FECHA]
                        </strong>
                    </h3>
                    <div className='row'>    
                        <div className='col-md-6'>
                            <Caja/>
                        </div>
                        <div className = 'col-md-6'>
                            <Sobre/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Saldos;
