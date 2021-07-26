export const Task = props => {
    const {task,onTaskNext,onTaskDelete,tid} = props;
    const onTaskNextClick = ()=>{
        onTaskNext(tid);
    }
    const onTaskDeleteClick = () =>{
        console.log('??Are you sure to remove',tid,task.title);
        onTaskDelete(tid);
    }
    return <li className="task">
        <h1 className="task-title">{task.title}</h1>
        <p className="task-body">{task.description}</p>
        <div className="task-command-wrapper">
            <button className="task-command" onClick={onTaskNextClick}>NEXT</button>
            <button className="task-command util-danger" onClick={onTaskDeleteClick}>DEL</button>
        </div>
    </li>
}
