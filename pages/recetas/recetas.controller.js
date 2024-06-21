import { recipe } from "../../components/recipe.js"
import {obtenerIngredientes } from "../../api/ing.api.js"
import { cargarReceta, obtenerRecetas } from "../../api/recipe.api.js"

const btnAdd = document.getElementById("add")
const btnCancel = document.getElementById("cancel")
const btnCreate = document.getElementById('create')
const selectIng = document.getElementById('ing');
const listaRecetas = document.getElementById('listRecipe')

const arrIng = []

btnCreate.addEventListener('click',async()=>{
    const name = document.getElementById("name").value
    /*Se debe añadir la receta creada al servidor */
   
        const ingredientes =  arrIng.map(e => ({
                id: e.ingid,
                cantidad: e.quantity
            }));

    await cargarReceta(name,ingredientes);
    await cargarRecetas();
    

})

btnAdd.addEventListener('click',()=>{
    const quantity = document.getElementById("quantity").value
    const ing = document.getElementById("ing").value
    const ingid = document.getElementById("ing").options[document.getElementById("ing").selectedIndex].dataset.ident;
    const li = document.createElement('li')


    arrIng.push({quantity, ing, ingid})
    li.textContent = `${ing}: ${quantity}`
    document.getElementById('list').appendChild(li)
})


btnCancel.addEventListener('click',()=>{
    arrIng.splice(0,arrIng.length)
    document.getElementById('list').innerHTML = ''
})

window.addEventListener('load',async function() {
    await cargarOptions()
    await cargarRecetas()

})
const cargarRecetas = async () => {
    const ing = await obtenerIngredientes();
    const recetas = await obtenerRecetas();

    listaRecetas.innerHTML = ''
    recetas.forEach(receta => {

        const ingredientesReceta = receta.ingredientes.map(ingReceta => {
            const nombreIng = ing.find(e => e.id == ingReceta.id);
            return {name:nombreIng.nombreIngrediente,quantity:ingReceta.cantidad };
        });

        console.log(ingredientesReceta)
        let nmb = receta.nombre
        const recetaHTML = recipe(nmb, ingredientesReceta);
        listaRecetas.innerHTML += recetaHTML;

    });
}



const cargarOptions = async () => {

    const ingredientes = await obtenerIngredientes();
    ingredientes.forEach(ingrediente => {
        const option = document.createElement('option');
        option.dataset.ident = ingrediente.id;
        option.value = ingrediente.nombreIngrediente;
        option.textContent = ingrediente.nombreIngrediente;
        selectIng.appendChild(option);
    });
}