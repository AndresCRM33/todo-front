import axios from "axios";

const API_URL = `http://localhost:3000`

export const obtenerTareas = async() => {
    try {
        const respuesta = await axios.get(`${API_URL}/tareas`)
        return respuesta.data
    } catch (error) {
        console.error("Error al obener tareas", error)
    }
}

export const eliminarTarea = async (id) => {
    try {
        await axios.delete(`${API_URL}/tareas/${id}`)
    } catch (error) {
        console.error("Error al obener tareas", error)
    }
}

export const agregarTarea = async (nuevaTarea) => {
    try {
        const respuesta = await axios.post(`${API_URL}/tareas`, nuevaTarea)
        return respuesta.data
    } catch (error) {
        console.error("Error al agregar tarea", error)
    }
}

export const completarTarea = async (id) => {
    try {
        const respuesta = await axios.put(`${API_URL}/tareas/${id}`)
        return respuesta.data
    } catch (error) {
        console.error("Error al completar la tarea", error)
    }
}

