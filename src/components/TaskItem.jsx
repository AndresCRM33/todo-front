import React from "react";

const TaskItem = ({tarea, handleEliminarTarea, completarTarea}) => {
    return(<li>
        <span>{tarea.titulo}</span>
        <button onClick={() => handleEliminarTarea(tarea._id)}>X</button>
        <button onClick={() => completarTarea(tarea.id)}>{tarea.completado ? "completado" : "incompleto"}</button>
    </li>)
}

export default TaskItem