import Task from './Task'
import { Link, BrowserRouter as Router } from "react-router-dom";

const DisplayTasks = ({ back, tasks, setNewContainer, setIdTask, setOldContainer }) => {

    const style = {
        display: 'flex'
    }

    return (
        <>
            <button onClick={back} className="btn__default btn__back" >Atrás</button>
            <div style={style}>
                {tasks.map(element =>
                    <Task
                        element={element}
                        key={element.id}
                        setNewContainer={setNewContainer}
                        setIdTask={setIdTask}
                        setOldContainer={setOldContainer}
                    />
                )}
            </div>
        </>
    )
}

export default DisplayTasks