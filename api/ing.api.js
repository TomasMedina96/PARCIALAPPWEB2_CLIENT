import { API } from "./api.js";

export const cargarIngrediente = async (nombre) =>{
    try {
        const res = await fetch(`${API}/agregarIngredientes/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre })
        })
        
        return res.json()
    } catch (error) {
        console.log(error)
        return {status:false}
    }
};

export const obtenerIngredientes = async () =>{
    try {
        const res = await fetch(`${API}/infoIngredientes/`,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        return res.json()
    } catch (error) {
        console.log(error)
        return {status:false}
    }
};

