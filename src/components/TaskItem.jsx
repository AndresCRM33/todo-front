import React from "react";

const TaskItem = ({tarea, eliminarTarea}) => {
    return(<li>
        <span>{tarea.title}</span>
        <button onClick={() => eliminarTarea(tarea.id)}>X</button>
    </li>)
}

export default TaskItem