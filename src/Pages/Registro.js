import React, {useEffect, useState} from 'react';
import { Formulary } from '../Components/Formulary';
import { ItemCandidatos } from '../Components/ItemCandidatos';
import { useSaveCandidato } from '../Hooks/useSaveCandidato';

export const Registro = () => {

    const [Candiatos, setCandiatos] = useState([])
    const [update, setUpdate] = useState(null)

    const GetData = async () => {
        const {data: {docs}} = await useSaveCandidato('https://inju-votaciones.herokuapp.com/getCandidatos', 'GET', {});

        setCandiatos(docs);
    }

    useEffect(() => {
        GetData()
    }, [])

    return (
        <div className="container">
            <Formulary candidatos={setCandiatos} update={[update, GetData]} erase={setUpdate}/>
            <div className="list">
                {
                    Candiatos.map( val => <ItemCandidatos data={val} key={val._id} get={GetData} update={setUpdate}/>)
                }
            </div>
        </div>
    )
}
