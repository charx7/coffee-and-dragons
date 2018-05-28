import React from 'react';
import ReactDOM from 'react-dom';

class EditarEgresos extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Detalles del egreso: 
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className='form-group'>
                                <input 
                                    className='form-control' 
                                    type="text"
                                    placeholder={'Descripcion'}
                                />
                            </div>
                            <div className='form-group'>                                
                                <input 
                                    className='form-control' 
                                    type="text"
                                    placeholder={'URL Imagen'}
                                />
                            </div>
                            <div className='form-group'>                                
                                <input 
                                    className='form-control' 
                                    type="text"
                                    placeholder={'Precio'}
                                />                    
                            </div>
                            <div className='form-group'>            
                                <input 
                                    className='form-control' 
                                    type="text"
                                    placeholder={'Unidad de Presentacion'}
                                />
                            </div>
                            <div className='form-group'>
                                <input 
                                    className='form-control' 
                                    type="text"
                                    placeholder={'Tipo de Egreso'}
                                />
                            </div>
                            <div className='form-group'>
                                <input 
                                    className='form-control' 
                                    type="text"
                                    placeholder={'Cantidad IVA'}
                                />
                            </div>
                            <div className = 'form-group'>
                                <select>
                                    <option value='valor1'>   Sams</option>
                                    <option value='valor2'>Cotsco</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <input className="btn btn-lg btn-primary btn-block" type="submit" value="Guardar"/>
                            </div>
                        </form> 
                        <button 
                            className='btn btn-danger btn-lg btn-block'
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditarEgresos;
