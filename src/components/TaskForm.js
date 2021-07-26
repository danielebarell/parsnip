export default function TaskForm(props){
    const onNewTask= ()=>{
        const title = document.querySelector('#title-field').value;
        const  description = document.querySelector('#description-field').value;
        props.addNewTask(title,description);
    }
    return <div className={props.show ? 'modal' : 'modal-hide'}>
        <div className="modal-inner">
            <form className="new-task-form">
                <fieldset>
                    <legend>New Task</legend>
                    <div className="close-btn-container">
                        <button className="btn close-btn" type="button" alt="Close" onClick={props.onHide}/>
                    </div>
                    <label htmlFor="title-field">Title</label>
                    <input type="text" id="title-field"/>
                    <label htmlFor="description-field">Description</label>
                    <textarea id="description-field">
      </textarea>
                    <input className="btn" type="button" value="Add" onClick={onNewTask}/>
                </fieldset>
            </form>
        </div>
    </div>
}
