import React, { useEffect, useState } from "react";
import TaskItem from "../components/TaskItem";
import { agregarTarea, obtenerTareas } from "../services/api";

const Home = () => {
    const [tareas, setTareas] = useState([])
    const [nuevaTarea, setNuevaTarea] = useState("")

    useEffect(() => {
        const cargarTareas = async () => {
            const tareasDesdeAPI = await obtenerTareas()
            setTareas(tareasDesdeAPI)
        }

        cargarTareas()
    })

    // const agregarTarea = () =>{

    //     if (nuevaTarea.trim() === "") return;

    //     const nueva = {
    //         id: Date.now(),
    //         titulo: nuevaTarea,
    //         completado: false
    //     }

    //     setTareas([...tareas, nueva])
    //     setNuevaTarea("")
    // }

    const handleAgregarTarea = async () => {
        if (nuevaTarea.trim === "") return;
        const tareaCreada = await agregarTarea({titulo: nuevaTarea, completado: false})
        setTareas([...tareas, tareaCreada])
        setNuevaTarea("")
    }

    const eliminarTarea = (id) =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas)
    }

    const completarTarea = (id) =>{
        const tareaParaActualizar = tareas.map(tarea => 
            tarea.id === id ? {...tarea, completed: !tarea.completed} : tarea)

        setTareas(tareaParaActualizar)
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
            onClick={handleAgregarTarea}>Agregar</button>
        </form>

        <ul>
        {tareas.map((tarea) => (
          <TaskItem key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} completarTarea={completarTarea}/>
        ))}
        </ul>
    </div>)
}

export default Home