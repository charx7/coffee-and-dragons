import React from 'react';
import TablaCostos from './TablaCostos';

class AnalisisVentas extends React.Component {
    render() {
        return(
            <div className='col-md-9'>
                <div className='row'>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Analisis de Ventas
                        </div>
                        <div className="panel-body">
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div>
                                        Gastos Fijos 
                                    </div>
                                    <div>
                                        Dias L-S 
                                    </div>
                                    <div>
                                        Domingos
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div>
                                        Requerido
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <TablaCostos />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnalisisVentas;
