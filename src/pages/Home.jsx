import React, { useState } from "react";
import TaskItem from "../components/TaskItem";

const Home = () => {
    const [tareas, setTareas] = useState([])
    const [nuevaTarea, setNuevaTarea] = useState("")

    const agregarTarea = () =>{

        if (nuevaTarea.trim() === "") return;

        const nueva = {
            id: Date.now(),
            title: nuevaTarea
        }

        setTareas([...tareas, nueva])
        setNuevaTarea("")
    }

    const eliminarTarea = () =>{

    }

    return(<div>
        <h2>Lista de tareas</h2>
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text"
            placeholder="Escribe una nueva tarea"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button
            onClick={agregarTarea}>Agregar</button>
        </form>

        <ul>
        {tareas.map((tarea, index) => (
          <TaskItem key={tarea.id} tarea={tarea} />
        ))}
        </ul>
    </div>)
}

export default Home