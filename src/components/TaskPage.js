import {Component} from 'react';
import {status_enums} from "../data/Model";
import {TaskList} from "./TaskList";
import TaskForm from "./TaskForm";

class TaskPage extends Component{
    constructor(props) {
        super(props);
        this.state = {newTaskShow: false};
        //this.addNewTask = this.addNewTask.bind(this);
        this.onNewTaskHide = this.onNewTaskHide.bind(this);
        this.onNewTaskShow = this.onNewTaskShow.bind(this);
        //Come addNewTask potresti evitare i bind trasformando i gli handler in 'arrow function'
    }
    /*addNewTask(title, description, status = 'Unstarted'){
        console.log('adding new task:',title,description,status);
        this.setState(
            state => ({...state, tasks : [...state.tasks,{title,description,status,id:Date.now()}]})
        )
    }*/
    onNewTask = (title, description, status = 'Unstarted')=>{
        /*this.setState(
            state => ({...state, tasks : [...state.tasks,{title,description,status,id:Date.now()}]})
        )*/
        /*doesn't setState directly, instead it uses a method that comes from its top container APP,
        * which in turn uses the Redux Store dispatch method
        * */
        this.props.onCreateTask(title,description,status);
    }
    toggleNewTask(){
        this.setState(
            state => ({newTaskShow : !state.newTaskShow})
        )
    }
    onNewTaskHide(){
        this.toggleNewTask();
    }
    onNewTaskShow(){
        this.toggleNewTask();
    }
    createTaskList(){
        return status_enums.map(
            s => <TaskList key={s.sid}
                           status={s.original}
                           tasks={this.props.tasks}
                           onTaskNext={this.props.onTaskNext}
                           onTaskDelete={this.props.onTaskDelete}
            />
        )
    }
    render(){
        console.log('render, check the state:', this.props);
        return <div className="app-wrapper">
            <header>
                <h1 className="app-title">{this.props.title}</h1>
            </header>
            <main className="app-board">
                {
                    this.createTaskList()
                }
                <button onClick={this.onNewTaskShow}>
                    New Task
                </button>
                <TaskForm
                    show={this.state.newTaskShow}
                    onHide={this.onNewTaskHide}
                    addNewTask={this.onNewTask}
                />
            </main>
        </div>
    }

}

export default TaskPage;

