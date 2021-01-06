import React, { useEffect, useState } from 'react'
import { ItemVotaciones } from '../Components/ItemVotaciones';
import { useSaveCandidato } from '../Hooks/useSaveCandidato';
import {io} from 'socket.io-client';

export const Votaciones = () => {

    
    const [Candiatos, setCandiatos] = useState([]);

    const GetData = async () => {
        const { data: { docs } } = await useSaveCandidato('http://localhost:3900/getCandidatos', 'GET', {});

        setCandiatos(docs);
    }


    useEffect(() => {
        GetData()

    }, [])

    return (
        <>
            <h1 id="titulo">Sistema de votaciones INJU</h1>
            <div className="container-votaciones">
                {
                    Candiatos.map(val => <ItemVotaciones data={val} key={val._id}/>)
                }
            </div>
        </>
    )
}
