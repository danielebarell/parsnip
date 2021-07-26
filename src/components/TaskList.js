import {Task} from "./Task";

const TaskList = props => {
    console.log('TaskList refresh');
    const {status, tasks} = props;
    const taskElements = tasks
        .filter(
            (t) => t.status === status
        )
        .map(
        (t) => <Task key={t.id} task={t} tid={t.id} onTaskNext={props.onTaskNext} onTaskDelete={props.onTaskDelete}/>
    )
    return <li className="task-list">
        <h1 className="task-list-type">{status}</h1>
        <ul className="task-list-items-wrapper">
            {taskElements}
        </ul>
    </li>
};
export {TaskList};
