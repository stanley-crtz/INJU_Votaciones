import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import No_Image from '../Images/No_Image.png'
import { useUploadImage } from '../Hooks/useUploadImage';
import { useSaveCandidato } from '../Hooks/useSaveCandidato';

export const Formulary = ({ candidatos, update, erase }) => {

    const [Name, setName] = useState('');

    useEffect(() => {

        if (update[0]) {
            console.log(update);
            setName(update[0].Nombre)
            const preview = document.querySelector("#preview");
            preview.src = update[0].Imagen.ruta;
        }

    }, [update[0]])

    const HandleSave = async (e) => {
        e.preventDefault();
        const archive = document.querySelector("#archive")
        const file = archive.files[0];

        const formData = new FormData();

        formData.append(
            'file0',
            file,
            file.name
        )

        const { image: { public_id, secure_url: ruta } } = await useUploadImage(formData);
        const data = {
            Nombre: Name,
            Imagen: {
                public_id,
                ruta
            }
        }
        console.log(data);
        const { data: result } = await useSaveCandidato('http://localhost:3900/saveCandidato', 'POST', data);

        candidatos((e) => [...e, data])
        limpiar()

    }

    const limpiar = () => {
        setName('');
        const preview = document.querySelector("#preview");
        preview.src = No_Image;
    }

    const HandleUpdate = async (e) => {
        e.preventDefault();
        const data = {
            info: {
                Nombre: Name,
                Imagen: {
                    public_id: update[0].Imagen.public_id,
                    ruta: update[0].Imagen.ruta,
                }
            },
            id: update[0]._id
        }

        const { data: result } = await useSaveCandidato('http://localhost:3900/updateCandidato', 'PUT', data);

        update[1]();
        erase(null)
        limpiar()
    }

    const handleChangeImage = (e) => {
        // Creamos el objeto de la clase FileReader
        let reader = new FileReader();

        // Leemos el archivo subido y se lo pasamos a nuestro fileReader
        reader.readAsDataURL(e.target.files[0]);

        // const result = null;
        reader.onload = function () {
            const preview = document.querySelector("#preview");
            preview.src = reader.result;
        };

    }

    return (
        <form onSubmit={update[0] == null ? HandleSave : HandleUpdate}>
            <h2>Registro</h2>
            <hr />
            <div>
                <label>Ingrese el nombre del candidato.</label>

                <input type="text" value={Name} placeholder="Nombre" onChange={(e) => setName(e.target.value)} />

                <div className="container-imagen-selected">
                    <img id="preview" src={No_Image} alt="Seleccione una imagen" />

                    <div className="info">
                        <p>Seleccione la foto del candidato</p>
                        <input id="archive" type="file" onChange={handleChangeImage} />
                    </div>
                </div>

                <input type="submit" value="Guardar" />

            </div>
        </form>
    )
}