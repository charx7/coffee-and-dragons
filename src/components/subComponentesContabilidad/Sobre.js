import React from 'react';

class Sobre extends React.Component {
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
                                Egresos de Sobre
                            </td>
                            <td>
                                600
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
                                Caja Teoria
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
                                Caja Real
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
