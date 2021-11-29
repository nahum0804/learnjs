(function(){
//variables
let lista = document.getElementById("lista"),
    tareaInput = document.getElementById("input"),
    btnNuevaTarea = doucment.getElementById("btn-agregar");
 
//funciones
let agregarTarea = function(){
    let tarea = tareaInput.value,
        nuevatarea = document.createElement("li"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea);
    if (tarea == ""){
        tareaInput.setAttribute("placeholder","Agrega una tarea valida")
        tareaInput.className = "error";
        return false;
    }
    enlace.appendChild(contenido);
    //ajustando atributo href =(url)
    enlace.setAttribute("href","#");
    nuevatarea.appendChild(enlace);

    lista.appendChild(nuevatarea);
    tareaInput.value = "";
};
let comprobarInput = function(){
    alert("funcion comprobarInput")
}
let eliminirTarea = function(){
    alert("funcion eliminarTarea")
}
 //Eventos

 //Agregar Tareas
 btnNuevaTarea.addEventListener("click",agregarTarea())

 //Comprobar Inputs
tareaInput.addEventListener("click",comprobarInput)

 //Borrador de inputs de la lista
 for (let i = 0; i < lista.children.length; i++){
     lista.children[i].addEventListener("click",eliminirTarea)
 }

})

