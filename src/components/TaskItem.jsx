import React from "react";

const TaskItem = ({tarea, handleEliminarTarea, handleCompletarTarea}) => {
    return(<li>
        <span>{tarea.titulo}</span>
        <button onClick={() => handleEliminarTarea(tarea._id)}>X</button>
        <button onClick={() => handleCompletarTarea(tarea._id)}>{tarea.completado ? "completado" : "incompleto"}</button>
    </li>)
}

export default TaskItem