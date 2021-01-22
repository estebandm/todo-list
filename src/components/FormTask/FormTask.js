import React, { useState } from "react";
//import "../../styles-base/formTask.scss";
import "../../styles-base/styles-base.scss";
import { v4 as uuidv4 } from 'uuid';
import swal, { SweetAlertIcon, SweetAlertOptions, SweetAlertResult } from 'sweetalert2'




/* const datos = [{
   title:  
}] */

const FormTask = ({ setArrayPending }) => {

    const initialDatos = {
        title: '',
        author: '',
        description: '',
        priority: '',
        state: 'pending'
    }

    const [datos, setDatos] = useState(initialDatos)

    /*  const [title, setTitle] = useState('')
     const [author, setAuthor] = useState('')
     const [description, setDescription] = useState('') */

    const inputOnChange = ({ target: { name, value } }) => {
        /*e.target.name === 'title' && setTitle(e.target.value)
        e.target.name === 'author' && setAuthor(e.target.value)
        e.target.name === 'description' && setDescription(e.target.value) */
        setDatos({ ...datos, [name]: value })
        console.log(name, value)
    }

    const clearForm = () => {
        setDatos({ title: '', author: '', description: '', priority: '' })
    }

    const onSubmit = (e) => {
        /*         console.log(datos.title)
                console.log(datos.author)
                console.log(datos.description) */
        e.preventDefault()
        /* console.log({
             id: uuidv4(),
             /* title: datos.title,
             author: datos.author,
             description: datos.description,
             priority: datos.priority,
             state: datos.state */
        //    ...datos //igual a las lineas de arriba
        // })
        const id = { id: uuidv4(), state: 'pending' }
        window.sessionStorage.setItem(id.state, JSON.stringify(datos))
        const dates = window.sessionStorage.getItem(id.state)
        //setArrayPending(prev => prev.concat({ id: id, dates }))
        setArrayPending(prev => prev.concat({ id: id, ...datos }))
        clearForm()

        swal.fire({
            title: 'Tarea guardada correctamente',
            icon: 'success'
        })

    }

    return (
        <form className="formTask" onSubmit={onSubmit}>
            <div className="input--group">
                <input type="text" placeholder="Título de la tarea" className="inputTask" id="titleTask" name="title" onChange={inputOnChange} value={datos.title}></input>
            </div>
            <div className="input--group">
                <input type="text" placeholder="A cargo de quién" id="responsableTask" className="inputTask" name="author" onChange={inputOnChange} value={datos.author}></input>
            </div>
            <div className="input--group">
                <textarea rows="4" placeholder="Descripción de la tarea" id="descriptionTask" className="inputTask textArea" name="description" onChange={inputOnChange} value={datos.description}></textarea>
            </div>
            <div>
                <label htmlFor="priority" className="label--priority">Prioridad:</label>
                <select name="priority" id="priority" className="inputTask inputTask--priority" onChange={inputOnChange}>
                    <option value="Baja">Baja</option>
                    <option value="Media">Media</option>
                    <option value="Alta">Alta</option>
                    <option value="Muy Alta">Muy Alta</option>
                </select>
            </div>
            <button type="submit" className="btn__default">Guardar</button>
        </form>
    )
}

export default FormTask;