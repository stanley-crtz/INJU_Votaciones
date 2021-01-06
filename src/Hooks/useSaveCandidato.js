import axios from "axios";

export const useSaveCandidato = async (url, method, data={}, params={}) => {

    let result;

    switch (method) {
        case 'POST':
            result = await axios.post(url, data)

            break;
        case 'PUT':
            result = await axios.put(url, data)
            break;

        case 'GET':
            result = await axios.get(url,{params})
            break;
        case 'DELETE':
            result = await axios.delete(url, {params})
            break;
    }

    return result;
}