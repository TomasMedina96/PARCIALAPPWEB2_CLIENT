import { API } from "./api.js";

export const cargarReceta = async (name,ingredientes) =>{
    try {
        const res = await fetch(`${API}/agregarRecetas/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {name, ingredientes})
        })
        
        return res.json()
    } catch (error) {
        console.log(error)
        return {status:false}
    }
};

export const obtenerRecetas = async () =>{
    try {
        const res = await fetch(`${API}/infoRecetas/`,{
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