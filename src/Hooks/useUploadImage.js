export const useUploadImage = async (FormData) => {
   const resp = await fetch('http://localhost:3900/saveImage', {
       method: 'POST',
       body:FormData
   })

   const data = resp.json()

   return data;
}