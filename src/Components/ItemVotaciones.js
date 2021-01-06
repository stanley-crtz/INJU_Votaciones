import React, { useRef } from 'react';
import Swal from 'sweetalert2'
import { useSaveCandidato } from '../Hooks/useSaveCandidato';
import ReactAudioPlayer from 'react-audio-player';
import Audio from '../Audio/audio.mp3'

export const ItemVotaciones = ({ data, socket }) => {

    const ref = useRef(null)

    const HandleClick = async () => {

        ref.current.play()
        await useSaveCandidato('http://localhost:3900/sumCandidato', 'PUT', { id: data._id });

        Swal.fire('Votacion Exitosa', 'Su voto a sido registrado', 'success')

        // setTimeout(() => {
        //     ref.current.pause()
        //     ref.current.currentTime = 0;
        // }, 5000)
    }

    return (
        <div className="itemCandidatos max" onClick={HandleClick}>
            <img src={data.Imagen.ruta} />
            <audio
                src={Audio}
                ref={ref}
            />
            <div className="itemVotaciones-info">
                <h2>{data.Nombre}</h2>
            </div>
        </div>
    )
}
