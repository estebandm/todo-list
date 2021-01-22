import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import '../../styles-base/styles-base.scss';
//import '../../styles-base/containerTask.scss';

const ContainerTask = ({ name, type, tasks, setVisibility, setIsClick }) => {

    /*     
        let state = false
        if (tasks.length > 0) state = true */

    const [disabled, setDisabled] = useState(() => tasks.length > 0)

    //disabled && 'btn__disabled' si disabled es true entonces agregame 'btn__disabled', si disabled es false no hagas nada.
    console.log(tasks.length, disabled)
    const onClick = (e) => {
        if (tasks.length == 0) {
            setIsClick('')
        } else {
            setVisibility(false)
            setIsClick(type)
        }
    }

    return (
        <div className={`containerTask ${type}`}>
            <h1 className={`title__${type}`}>{name}</h1>
            <span className="amountOfTasks">{tasks.length}</span>
            <button className={`btn__default btn__${type} ${!disabled && 'btn__disabled'}`} onClick={onClick}>Ver</button>
        </div>
    )
}


export default ContainerTask;