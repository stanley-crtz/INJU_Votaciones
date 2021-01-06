import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';

export const Home = () => {

    const [pass, setPass] = useState({
        value: '',
        correcto: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (pass.value === "Stanley2021") {
            setPass({...pass, ['correcto']: true})
        }
        else{
            alert("Contraseña incorrecta");
        }
    }

    return (
        <div className="card-login animate__animated animate__backInDown">
            {
                pass.correcto &&
                    <Redirect to="/Configuraciones" />
            }
            <h1>Sistema de Votaciones INJU</h1>
            <form onSubmit={handleSubmit}>
                <input type="password" value={pass.value} placeholder="Password" onChange={(e) => setPass({...pass, ['value']: e.target.value})}/>
            </form>
            <Link to="/Votaciones">Votar</Link>
        </div>
    )
}
