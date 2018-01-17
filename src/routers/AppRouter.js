// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
// Importaciones de Ruteo
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; // Importaciones Necesarias para establecer el routeo
// Importaciones de los componentes indivicuales
import DashboardPagina from '../components/DashboardPagina';
import NoEncontradoPagina from '../components/NoEncontradoPagina';
import Header from '../components/Header';
import LandingPagina from '../components/LandingPagina';
import EditarVenta from '../components/subComponentesHistorico/EditarVenta';

// Componente que hace que se carguen las Rutas
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                {/* Ruta del Landing*/}
                <Route path = '/' component = {LandingPagina} exact = {true}/>
                {/* Ruta del Dashboard*/}
                <Route path = '/dashboard' component = {DashboardPagina} exact = {true}/>
                {/* Ruta para elemento individual*/}
                <Route path = '/dashboard/editar/venta/:id' component = {EditarVenta} />
                {/* Ruta para 404*/}
                <Route component ={NoEncontradoPagina}/>
            </Switch>    
        </div>
    </BrowserRouter>
);

export default AppRouter;