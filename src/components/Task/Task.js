import React from 'react'
import "../../styles-base/styles-base.scss";
import swal, { SweetAlertIcon, SweetAlertOptions, SweetAlertResult } from 'sweetalert2'


export default function Task(props) {
    //console.log(props)
    const onClick = (e) => {
        props.setOldContainer(props.element.state)
        props.setNewContainer(e.target.name)
        props.setIdTask(props.element.id)
        swal.fire({
            html: '<span class="titleSA">Successful</span>',
            showConfirmButton: false,
            timer: 1500,
            background: 'rgb(110, 197, 115)',
            //grow: 'row',
            toast: true,
            position: 'top'
        })
    }
    return (
        <div className={`task ${props.element.state}`}>
            <h1 className={`title`}>{props.element.title}</h1>
            <span className="span">A cargo de: {props.element.author}</span>
            <span>Prioridad {props.element.priority}</span>
            <p>{props.element.description}</p>
            <div className="containerButtons">
                <button onClick={onClick} className="button button--ok" name="succes">Hecho</button>
                <button onClick={onClick} className="button delete" name="delete">Eliminar</button>
            </div>
        </div>
    )
}