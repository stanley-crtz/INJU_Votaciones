import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import {Header} from '../Components/Header';
import { Estadistica } from './Estadistica';
import { Registro } from './Registro';


export const Configuraciones = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/Configuraciones">
                        <Redirect to="/Configuraciones/Estadisticas"/>
                    </Route>
                    <Route path="/Configuraciones/Registro">
                        <Registro />
                    </Route>
                    <Route path="/Configuraciones/Estadisticas">
                        <Estadistica />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
