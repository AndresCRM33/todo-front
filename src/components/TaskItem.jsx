import React from "react";

const TaskItem = ({tarea}) => {
    return(<li>
        <span>{tarea.title}</span>
    </li>)
}

export default TaskItem