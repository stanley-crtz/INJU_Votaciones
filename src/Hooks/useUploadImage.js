export const useUploadImage = async (FormData) => {
   const resp = await fetch('https://inju-votaciones.herokuapp.com/saveImage', {
       method: 'POST',
       body:FormData
   })

   const data = resp.json()

   return data;
}