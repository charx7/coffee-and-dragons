import React from 'react';
import moment from 'moment';

class ArqueoInicio extends React.Component {

    state = {
        cantidad500:    0,
        cantidad200:    0,
        cantidad100:    0,
        cantidad50:     0,
        cantidad20:     0,
        cantidad10:     0,
        cantidad5:      0,
        cantidad2:      0,
        cantidad1:      0,
        cantidadPunto5: 0
    }

    manejaCambioDenominaciones = (cantidad, denominacion) => {
        // Verificamos si es una cadena
        let cadenaCantidad = cantidad.target.value;
        // Le quito los espacios
        let cantidadSinEspacios = Number(cadenaCantidad.toString().trim());
        
        // Si no esta vacia procedemos a hacer los casos switch
        if(!isNaN(cantidadSinEspacios)) {
            switch (denominacion) {
                case 'DENOMINACION500':
                    this.setState(() => {
                        return ({
                            cantidad500: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION200':
                    this.setState(() => {
                        return ({
                            cantidad200: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION100':
                    this.setState(() => {
                        return ({
                            cantidad100: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION50':
                    this.setState(() => {
                        return ({
                            cantidad50: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION20':
                    this.setState(() => {
                        return ({
                            cantidad20: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION10':
                    this.setState(() => {
                        return ({
                            cantidad10: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION5':
                    this.setState(() => {
                        return ({
                            cantidad5: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION2':
                    this.setState(() => {
                        return ({
                            cantidad2: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACION1':
                    this.setState(() => {
                        return ({
                            cantidad1: cantidadSinEspacios
                        });
                    });
                return;
                case 'DENOMINACIONPUNTO5':
                    this.setState(() => {
                        return ({
                            cantidadPunto5: cantidadSinEspacios
                        });
                    });
                return;
                default:
                    return;
            }
        } else {
            console.log('Cadena Invalida');
        }
    }

    render () {
        return (
            <div>
                <h3>
                    <strong>Inicio Real</strong>
                </h3>
                <table className = 'table table-striped'>
                    <thead>
                        <tr>
                            <th>Cantidad</th>
                            <th>Denominacion</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad500}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION500')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
                            </td>
                            <td>500.00</td>
                            <td>
                                <strong>
                                    {this.state.cantidad500 * 500}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad200}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION200')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
                            </td>
                            <td>200.00</td>
                            <td>
                                <strong>
                                    {this.state.cantidad200 * 200}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad100}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION100')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
                            </td>
                            <td>100.00</td>
                            <td>
                                <strong>
                                    {this.state.cantidad100 * 100}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad50}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION50')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
                            </td>
                            <td>50.00</td>
                            <td>
                                <strong>
                                    {this.state.cantidad50 * 50}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad20}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION20')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
                            </td>
                            <td>20.00</td>
                            <td>
                                <strong>
                                    {this.state.cantidad20 * 20}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad10}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION10')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
                            </td>
                            <td>10.00</td>
                            <td>
                                <strong>
                                    {this.state.cantidad10 * 10}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad5}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION5')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
                            </td>
                            <td>5.00</td>
                            <td>
                                <strong>
                                    {this.state.cantidad5 * 5}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad2}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION2')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
                            </td>
                            <td>2.00</td>
                            <td>
                                <strong>
                                    {this.state.cantidad2 * 2}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidad1}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACION1')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
                            </td>
                            <td>1.00</td>
                            <td>
                                <strong>
                                    {this.state.cantidad1 * 1}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                    type      = "text"
                                    value     = {this.state.cantidadPunto5}
                                    onChange  = {(cantidad) => this.manejaCambioDenominaciones(cantidad, 'DENOMINACIONPUNTO5')}
                                    maxLength = "4" 
                                    size      = "4"
                                />
                            </td>
                            <td>0.50</td>
                            <td>
                                <strong>
                                    {this.state.cantidadPunto5 * 0.5}
                                </strong> 
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><strong>Gran Total: </strong></td>
                            <td> {
                                    this.state.cantidad500    * 500 +
                                    this.state.cantidad200    * 200 +
                                    this.state.cantidad100    * 100 +
                                    this.state.cantidad50     * 50  +
                                    this.state.cantidad20     * 20  +
                                    this.state.cantidad10     * 10  +
                                    this.state.cantidad5      * 5   +
                                    this.state.cantidad2      * 2   +
                                    this.state.cantidad1      * 1   +
                                    this.state.cantidadPunto5 * 0.5 
                                } 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ArqueoInicio;
