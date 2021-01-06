import React, { useEffect, useState } from 'react'
import { useSaveCandidato } from '../Hooks/useSaveCandidato';
import Swal from 'sweetalert2'
import { Bar } from '../Components/Bar';

export const Estadistica = () => {

    const [Data, setData] = useState({
        labels: [],
        votes: []
    })

    const GetData= async () => {
        const { data: { docs } } = await useSaveCandidato('http://localhost:3900/getCandidatos', 'GET', {});
        
        const labels = docs.reduce((acc, el) => acc = [...acc, el.Nombre], []);
        const votes = docs.reduce((acc, el) => acc = [...acc, el.votos], []);
        
        setData({labels, votes})
    }

    useEffect(() => {
        
        GetData()
    })
    
    const HanldeReset = async () => {
        await useSaveCandidato('http://localhost:3900/resetCandidato', 'PUT', {});
        Swal.fire('Reinicio exitoso', '','success')
    }

    return (
        <>
            <button id="Reset" onClick={HanldeReset}>Reset</button>
            <Bar data={Data} />
        </>
    )
}
