import FormTask from "./components/FormTask/FormTask";
import ContainerTask from "./components/ContainerTask/ContainerTask";
import "./styles-base/styles-base.scss"
import * as Tasks from "./tasks.json"
import DisplayTasks from './components/Task/DisplayTasks'
import { Route, BrowserRouter as Router, Switch, Link, Redirect, useParams } from "react-router-dom";
import React, {  useState } from 'react'

export default function App() {

  const initialDatos = {
    title: '',
    author: '',
    description: '',
    priority: '',
    state: ''
  }

  /*   const [arraySucces, setArraySucces] = useState(() => Tasks.default.tasks.filter(task => task.state === 'succes'))
    const [arrayPending, setArrayPending] = useState(() => Tasks.default.tasks.filter(task => task.state === 'pending'))
    const [arrayDelete, setArrayDelete] = useState(() => Tasks.default.tasks.filter(task => task.state === 'delete')) */
  const [arraySucces, setArraySucces] = useState([])
  const [arrayPending, setArrayPending] = useState([])
  const [arrayDelete, setArrayDelete] = useState([])
  const [visibility, setVisibility] = useState(true)

  const [isClick, setIsClick] = useState('')
  //newContainer va a contener un string de "succes" o "delete" (para saber si la tarea pendiente hay q eliminarla o si está realizada)
  const [newContainer, setNewContainer] = useState('')
  const [oldContainer, setOldContainer] = useState('')
  //falta crear un estado que devuelva la id de la tarea para saber que tarea del array de pending hay q quitar y agregar al array de delete o succes
  const [idTask, setIdTask] = useState('')

  const back = () => {
    setVisibility(!visibility)
    setIsClick('')
  }

  if (idTask != '') {
    let taskTemp
    if (oldContainer === 'succes') taskTemp = arraySucces.splice(arraySucces.indexOf(arraySucces.find(task => task.id === idTask)), 1)
    if (oldContainer === 'pending') taskTemp = arrayPending.splice(arrayPending.indexOf(arrayPending.find(task => task.id === idTask)), 1)
    if (oldContainer === 'delete') taskTemp = arrayDelete.splice(arrayDelete.indexOf(arrayDelete.find(task => task.id === idTask)), 1)

    console.log(taskTemp)

    taskTemp.state = newContainer
    let aux = taskTemp.pop()
    aux.state = newContainer

    console.log(taskTemp)

    newContainer === 'succes' && arraySucces.push(aux)
    newContainer === 'pending' && arrayPending.push(aux)
    newContainer === 'delete' && arrayDelete.push(aux)
    setOldContainer('')
    setNewContainer('')
    setIdTask('')
  }


  if (visibility) {
    console.log('entre aca')
    return (
      <Router>
        <Switch>
          <Route exact path="/Inicio">
            <div className="container">
              <FormTask setArrayPending={setArrayPending} />
              <ContainerTask name="Tareas Realizadas" type="succes" tasks={arraySucces} setVisibility={setVisibility} setIsClick={setIsClick}></ContainerTask>
              <ContainerTask name="Tareas Pendientes" type="pending" tasks={arrayPending} setVisibility={setVisibility} setIsClick={setIsClick}></ContainerTask>
              <ContainerTask name="Tareas Eliminadas" type="delete" tasks={arrayDelete} setVisibility={setVisibility} setIsClick={setIsClick}></ContainerTask>
            </div>
          </Route>
          <Redirect to='/Inicio'/>
        </Switch>
      </Router>

    );
  }
  console.log(isClick)
  if (isClick === 'pending') return (
    <DisplayTasks back={back} tasks={arrayPending} setNewContainer={setNewContainer}
      setIdTask={setIdTask}
      setOldContainer={setOldContainer} />
  )

  else if (isClick === 'delete') return <DisplayTasks back={back} tasks={arrayDelete} setNewContainer={setNewContainer}
    setIdTask={setIdTask}
    setOldContainer={setOldContainer} />

  else if (isClick === 'succes') return <DisplayTasks back={back} tasks={arraySucces} setNewContainer={setNewContainer}
    setIdTask={setIdTask}
    setOldContainer={setOldContainer} />



}

