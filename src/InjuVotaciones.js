import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Home } from './Components/Home';
import { Configuraciones } from './Pages/Configuraciones';
import { Votaciones } from './Pages/Votaciones';


export const InjuVotaciones = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Configuraciones">
                    <Configuraciones />
                </Route>
                <Route path="/Votaciones">
                    <Votaciones />
                </Route>
            </Switch>
        </Router>
    )
}
