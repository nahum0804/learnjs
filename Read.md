# learnjs
### Introducción

Este proyecto lo estoy realizando con el objetivo de aprender a utilizar JavaScript.

# ¿Como funciona?

-Consiste en una pagina que se encarga de crear una lista de tareas, que se van agregando con el botón "Agregar Tarea" gracias a una funcion que se encuentra en el archivo "magic.js".
```javascript
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
```

El documento cuenta con funciones "incompletas" que utilzan "alerts" para comprobar el funcionamiento correcto del codigo, ya que no lo he logrado.

# Editar

Puedes descargar un archio _.zip _ con todos los documentos del repositorio y abrirlo en un IDE ya descargado en tu computadora.


### End
