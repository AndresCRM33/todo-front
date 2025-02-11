import React from "react";

const TaskItem = ({tarea, eliminarTarea, completarTarea}) => {
    return(<li>
        <span>{tarea.title}</span>
        <button onClick={() => eliminarTarea(tarea.id)}>X</button>
        <button onClick={() => completarTarea(tarea.id)}>{tarea.completed ? "completado" : "incompleto"}</button>
    </li>)
}

export default TaskItem