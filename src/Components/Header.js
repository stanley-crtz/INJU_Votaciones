import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <h1>INJU</h1>
            <ul>
                <li>
                    <NavLink to="/Configuraciones/Registro" activeClassName="active">Registro</NavLink>
                </li>
                <li>
                    <NavLink to="/Configuraciones/Estadisticas">Estadisticas</NavLink>
                </li>
            </ul>
        </header>
    )
}
