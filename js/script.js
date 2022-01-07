
const aviso = document.querySelector(".aviso");

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
    task.appendChild(addDeleteBtn());
    
    aviso.style.display = "none";
};


//FUNCIÓN QUE NOS AYUDARÁ A PODER ELIMINAR UNA ACTIVIDAD MEDIANTE UN BOTÓN
function addDeleteBtn() {
  const deleteBtn = document.createElement(`button`);
  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (event) => {
    const item = event.target.parentElement;
    tasksContainer.removeChild(item);

    const items = document.querySelectorAll(".task");

    if (items.length === 0) {
        aviso.style.display = "block";
    }
  });
  return deleteBtn;
}


//FUNCIÓN QUE NOS PERMITIRÁ MARCAR LA TAREA COMO REALIZADA O NO
const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el);
    })
    
    return [...toDo, ...done];

}





