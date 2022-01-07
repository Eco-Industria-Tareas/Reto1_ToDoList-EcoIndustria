//Declarar una constante de el aviso que aparecerá cuando no haya ninguna tarea
const aviso = document.querySelector(".aviso");


//Evento que nos permita almacenar las tareas que el usuario está agregando a la lista
const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;

    //Crear el espacio (div) donde la tarea va a ser almacenada en el contenedor de las tareas
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');

    //Indicar el evento para almacenar la tarea
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();



    //Mostrar en el evento la función de un botón de "Eliminar Tarea" en caso el usuario ya no la quiera en la lista
    task.appendChild(addDeleteBtn());
    
    // Mostrar el aviso en caso que el usuario no haya ingresado nada
    aviso.style.display = "none";
};




//FUNCIÓN QUE NOS AYUDARÁ A PODER ELIMINAR UNA ACTIVIDAD MEDIANTE UN BOTÓN:
//Crear función
function addDeleteBtn() {
  //Crear el botón
  const deleteBtn = document.createElement(`button`);
  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";


  //Indicar el evento donde se removerá o eliminará la tarea mediante el botón que creamos anteriormente
  deleteBtn.addEventListener("click", (event) => {
    const item = event.target.parentElement;
    tasksContainer.removeChild(item);

    const items = document.querySelectorAll(".task");
    //Agregar condición `Si no hay tareas entonces el mensaje de "No hay tareas pendientes" se mostrará`.
    if (items.length === 0) {
        aviso.style.display = "block";
    }
  });
  //Retornar función
  return deleteBtn;
}




//FUNCIÓN QUE NOS PERMITIRÁ MARCAR LA TAREA COMO REALIZADA O NO
//Crearemos un evento donde si está terminada no llevará a la los estilos donde "done" se definió con line-through y cambio de background color.
const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    //Constantes 
    let done = [];
    let toDo = [];

    //Crear evento conjunto con una condición 
    tasksContainer.childNodes.forEach( event => {
        
        //Condición "Si el usuario le da click a la tarea es porque ya lo realizó y si no le da otro click y se quitan los estilos (line-through y cambio de background color)"
        event.classList.contains('done') ? done.push(event) : toDo.push(event);
    })
    
    //Retornar función
    return [...toDo, ...done];

}