import { cargarIngrediente, obtenerIngredientes } from "../../api/ing.api.js"

const btnCreate = document.getElementById("create")


//crear
btnCreate.addEventListener('click', async ()=>{
    const name = document.getElementById("name").value
    

        const result = await cargarIngrediente(name);

        if (result) {
            await actualizarListaIngredientes()
        } else {
            console.log('Error al agregar el ingrediente');
        }
    
    
})

window.addEventListener('load', async function() {
    /*Llenar lista con los ingredientes existentes*/
   await actualizarListaIngredientes()

})

const actualizarListaIngredientes = async () => {
    /*Llenar lista con los ingredientes existentes*/
    const ingredientes = await obtenerIngredientes();

    const listaElement = document.getElementById('list');
    listaElement.innerHTML = ''; // Limpiar lista actual


        ingredientes.forEach(ingrediente => {
            const li = document.createElement('li');
            li.textContent = `${ingrediente.nombreIngrediente}`;
            listaElement.appendChild(li);
        });
};

