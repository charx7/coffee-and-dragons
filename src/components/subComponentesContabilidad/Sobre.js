import React from 'react';

class Sobre extends React.Component {

    state = {
        razonesDiferencia: '',
        descripcionIngresosEgresos: ''
    }

    // Manejador del textarea
    manejaCambioRazonesDiferencia = (e) => {
        let cadenaRazones = e.target.value;
        this.setState({
            razonesDiferencia: cadenaRazones
        });
    }

    // Manejador del textarea
    manejaCambioDescripcionIngresosEgresos = (e) => {
        let cadenaDescripciones = e.target.value;
        this.setState({
            descripcionIngresosEgresos: cadenaDescripciones
        });
    }

    render () {
        return (
            <div>
                <table className = 'table table-striped'>
                    <thead>
                        <tr>
                            <th>Concepto</th>
                            <th>Saldo</th>
                            <th>Inputs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Saldo Inicial Sobre
                            </td>
                            <td>
                                6000
                            </td>
                            <td>
                                <input 
                                    type      ="text"
                                    maxLength = "6" 
                                    size      = "6"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Traspasos de Caja a Sobre
                            </td>
                            <td>
                                500
                            </td>
                            <td>
                                <input 
                                    type      ="text"
                                    maxLength = "6" 
                                    size      = "6"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Traspasos de Sobre a Caja
                            </td>
                            <td>
                                500
                            </td>
                            <td>
                                <input 
                                    type      ="text"
                                    maxLength = "6" 
                                    size      = "6"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ingresos de Sobre
                            </td>
                            <td>
                                500
                            </td>
                            <td>
                                <input 
                                    type      ="text"
                                    maxLength = "6" 
                                    size      = "6"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Egresos de Sobre
                            </td>
                            <td>
                                500
                            </td>
                            <td>
                                <input 
                                    type      ="text"
                                    maxLength = "6" 
                                    size      = "6"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Cantidad Teorica en Sobre
                            </td>
                            <td>
                                1000
                            </td>
                            <td>
                                <input 
                                    type      ="text"
                                    maxLength = "6" 
                                    size      = "6"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Caja Real en Sobre
                            </td>
                            <td>
                                1000
                            </td>
                            <td>
                                <input 
                                    type      ="text"
                                    maxLength = "6" 
                                    size      = "6"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Diferencia
                            </td>
                            <td>
                                100
                            </td>
                            <td>
                                <input 
                                    type      ="text"
                                    maxLength = "6" 
                                    size      = "6"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className = 'row'>
                    <div className = 'col-md-12'>
                        <div className = "form-group">
                            <label htmlFor ="textoRazonDiferencia">Razones diferencia en Sobre:</label>
                            <textarea 
                                className = "form-control" 
                                id        = "textoRazonDiferencia" 
                                rows      = "3"
                                value     = {this.state.razonesDiferencia}
                                onChange  = {this.manejaCambioRazonesDiferencia}
                            >
                            </textarea>
                        </div>
                    </div>
                </div>
                <br/>
                <div className = 'row'>
                    <div className = 'col-md-12'>
                        <div className = "form-group">
                            <label htmlFor ="textoRazonDiferencia">Descripcion Campos Ingresos/Egresos: </label>
                            <textarea 
                                className = "form-control" 
                                id        = "textoRazonDiferencia" 
                                rows      = "3"
                                value     = {this.state.descripcionIngresosEgresos}
                                onChange  = {this.manejaCambioDescripcionIngresosEgresos}
                            >
                            </textarea>
                        </div>
                    </div>
                </div>
                <button 
                    type="button" 
                    className="btn btn-primary btn-block"
                    onClick = {() => {
                        alert('Auch me picastesss XD');    
                    }}            
                >
                    Guardar Saldos Sobre
                </button>
            </div>
        )
    }
}

export default Sobre;
