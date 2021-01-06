import React from 'react';
import Swal from 'sweetalert2'
import { useSaveCandidato } from '../Hooks/useSaveCandidato';

export const ItemCandidatos = ({ data, get, update }) => {

    const HandleDelete = () => {
        Swal.fire({
            title: '¿Desea eliminar este candidato?',
            text: "Una vez borrado no podra ser recuperado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                DeleteUser()
            }
        })
    }

    const DeleteUser = async () => {
        await useSaveCandidato('http://localhost:3900/deleteCandidato', 'DELETE', {}, { id: data._id });
        Swal.fire(
            '¡Candidato eliminado!',
            'Tu candidato a sido eliminado',
            'success'
        )
        get()
    }

    return (
        <div className="itemCandidatos">
            <img src={data.Imagen.ruta} />
            <div className="itemCandidatos-info">
                <p>Nombre: {data.Nombre}</p>
                <div className="button-item">
                    <input id="modi" type="button" value="Modificar" onClick={() => update(data)}/>
                    <input id="dele" type="button" value="Eliminar" onClick={HandleDelete} />
                </div>
            </div>
        </div>
    )
}
