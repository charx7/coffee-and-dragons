import React from 'react';

class Sobre extends React.Component {

    state = {
        razonesDiferenciaSobre:         this.props.currentArqueo.razonesDiferenciaSobre ? this.props.currentArqueo.razonesDiferenciaSobre : '',
        descripcionIngresosEgresos:     this.props.currentArqueo.descripcionIngresosEgresos ? this.props.currentArqueo.descripcionIngresosEgresos : '',
        saldoInicialSobre:              this.props.currentArqueo.saldoInicialSobre ? this.props.currentArqueo.saldoFinalSobre : 0,
        traspasosCajaSobre:             this.props.currentArqueo.traspasosCajaSobre ? this.props.currentArqueo.traspasosCajaSobre : 0,
        traspasosSobreCaja:             this.props.currentArqueo.traspasosSobreCaja ? this.props.currentArqueo.traspasosSobreCaja : 0,
        ingresosSobre:                  this.props.currentArqueo.ingresosSobre ? this.props.currentArqueo.ingresosSobre : 0,
        egresosSobre:                   this.props.currentArqueo.egresosSobre ? this.props.currentArqueo.egresosSobre : 0,
        saldoFinalSobre:                this.props.currentArqueo.saldoFinalSobre ? this.props.currentArqueo.saldoFinalSobre : 0
    }

    // IMPORTANTE!!!! Metodo de life-cycle para actualizar estado en cambio de componentes
    componentDidUpdate(previousProps) {
        // Verifica si los props anteriores son diferentes a los nuevos y hace update al estado en ese caso
        if(previousProps.currentArqueo._id !== this.props.currentArqueo._id) {
            this.setState({ 
                razonesDiferenciaSobre:         this.props.currentArqueo.razonesDiferenciaSobre ? this.props.currentArqueo.razonesDiferenciaSobre : '',
                descripcionIngresosEgresos:     this.props.currentArqueo.descripcionIngresosEgresos ? this.props.currentArqueo.descripcionIngresosEgresos : '',
                saldoInicialSobre:              this.props.currentArqueo.saldoInicialSobre ? this.props.currentArqueo.saldoFinalSobre : 0,
                traspasosCajaSobre:             this.props.currentArqueo.traspasosCajaSobre ? this.props.currentArqueo.traspasosCajaSobre : 0,
                traspasosSobreCaja:             this.props.currentArqueo.traspasosSobreCaja ? this.props.currentArqueo.traspasosSobreCaja : 0,
                ingresosSobre:                  this.props.currentArqueo.ingresosSobre ? this.props.currentArqueo.ingresosSobre : 0,
                egresosSobre:                   this.props.currentArqueo.egresosSobre ? this.props.currentArqueo.egresosSobre : 0,
                saldoFinalSobre:                this.props.currentArqueo.saldoFinalSobre ? this.props.currentArqueo.saldoFinalSobre : 0   
            });
        }
      }

    // Manejador del textarea
    manejaCambioRazonesDiferencia = (e) => {
        let cadenaRazones = e.target.value;
        this.setState({
            razonesDiferenciaSobre: cadenaRazones
        });
    }

    // Manejador del textarea
    manejaCambioDescripcionIngresosEgresos = (e) => {
        let cadenaDescripciones = e.target.value;
        this.setState({
            descripcionIngresosEgresos: cadenaDescripciones
        });
    }

    // Manejadores de estado de los inputs del sobre
    manejaCambioInputsSobre = (cantidad, saldoTipo) => {
        // Verificamos si es una cadena
        let cadenaCantidad = cantidad.target.value;
        // Le quito los espacios
        let cantidadSinEspacios = Number(cadenaCantidad.toString().trim());
        // Si no esta vacia procedemos a hacer los casos switch
        if(!isNaN(cantidadSinEspacios)) {
            switch (saldoTipo) {
                case 'CAMBIO_SALDO_INICIAL_SOBRE':
                    this.setState({ saldoInicialSobre: cantidadSinEspacios })
                return;
                case 'CAMBIO_TRASPASOS_CAJA_SOBRE':
                    this.setState({ traspasosCajaSobre: cantidadSinEspacios })
                return;
                case 'CAMBIO_TRASPASOS_SOBRE_CAJA':
                    this.setState({ traspasosSobreCaja: cantidadSinEspacios })
                return;
                case 'CAMBIO_INGRESOS_SOBRE':
                    this.setState({ ingresosSobre: cantidadSinEspacios })
                return;
                case 'CAMBIO_EGRESOS_SOBRE':
                    this.setState({ egresosSobre: cantidadSinEspacios })
                return;
                case 'CAMBIO_SALDO_FINAL_SOBRE': 
                    this.setState({ saldoFinalSobre: cantidadSinEspacios })
                return;
                default:
                    return;
            }
        }
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
                                    value     = {this.state.saldoInicialSobre}
                                    onChange  = {(cantidad) => this.manejaCambioInputsSobre(cantidad, 'CAMBIO_SALDO_INICIAL_SOBRE')}
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
                                    value     = {this.state.traspasosCajaSobre}
                                    onChange  = {(cantidad) => this.manejaCambioInputsSobre(cantidad, 'CAMBIO_TRASPASOS_CAJA_SOBRE')}
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
                                    value     = {this.state.traspasosSobreCaja}
                                    onChange  = {(cantidad) => this.manejaCambioInputsSobre(cantidad, 'CAMBIO_TRASPASOS_SOBRE_CAJA')}
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
                                    value     = {this.state.ingresosSobre}
                                    onChange  = {(cantidad) => this.manejaCambioInputsSobre(cantidad, 'CAMBIO_INGRESOS_SOBRE')}
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
                                    value     = {this.state.egresosSobre}
                                    onChange  = {(cantidad) => this.manejaCambioInputsSobre(cantidad, 'CAMBIO_EGRESOS_SOBRE')}
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
                                {'Aca deberia aparecer una suma de los saldos'}
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
                                    value     = {this.state.saldoFinalSobre}
                                    onChange  = {(cantidad) => this.manejaCambioInputsSobre(cantidad, 'CAMBIO_SALDO_FINAL_SOBRE')}
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
                                {'Aca deberia aparecer la diferencia de las cajas'}
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
                                value     = {this.state.razonesDiferenciaSobre}
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
                        let actualizaciones = {
                            saldoInicialSobre:          this.state.saldoInicialSobre,
                            saldoFinalSobre:            this.state.saldoFinalSobre,
                            traspasosCajaSobre:         this.state.traspasosCajaSobre,
                            traspasosSobreCaja:         this.state.traspasosSobreCaja,
                            ingresosSobre:              this.state.ingresosSobre,
                            egresosSobre:               this.state.egresosSobre,
                            razonesDiferenciaSobre:     this.state.razonesDiferenciaSobre,
                            descripcionIngresosEgresos: this.state.descripcionIngresosEgresos
                        }
                        this.props.manejaGuardarSaldos(this.props.currentArqueo._id,this.props.currentFecha,actualizaciones);    
                    }}            
                >
                    Guardar Saldos Sobre
                </button>
            </div>
        )
    }
}

export default Sobre;
