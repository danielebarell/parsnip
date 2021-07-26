import './styles/App.css';
import './styles/TaskForm.css';
import TaskPage from "./components/TaskPage";
import {Component} from 'react';
import {connect} from 'react-redux';
import {newTaskCreator,taskNextCreator, taskDeleteCreator} from './actions/actions'
/*
OLD COMPONENT, using React without Redux
function App() {
  return (<TaskPage title={board.title} tasks={board.tasks}></TaskPage>);
}
export default App;*/
/*
STATEFUL COMPONENT, its convoluted repetitive and even dangerous
having a 'state' given by props given by redux's state.

class App extends Component{
    constructor(propsFromStore) {
        super(propsFromStore);
        this.state = {title: propsFromStore.title, tasks: propsFromStore.tasks};
    }
    render(){
        return <TaskPage title={this.state.title} tasks={this.state.tasks}></TaskPage>
    }
}*/
/*
Now, a functonal component is used for presentation only.
It comes up App should also handle events by connecting to the the store.
const App = (props) => {
    console.log('props from App: ', props);//props from App: Object { title: "Parsnip", tasks: (2) […],
    // dispatch:dispatch(action) }
    //NOTE: Props contains a *dispatch* function

    return <TaskPage tasks={props.tasks} title={props.title}></TaskPage>
}*/
class App extends Component{
    constructor(props) {
        //console.log(props);//dispatch from the store?
        super(props);
        console.log(this.props);
    }
    onCreateTask=(title,description,status)=>{
        //const createTaskAction = {type:'CREATE_TASK',payload:{title,description,status,id:Date.now()}};
        /*use an action creator*/
        const createTaskAction = newTaskCreator(title, description, status);
        this.props.dispatch(createTaskAction);
    }
    onTaskNext=(tid)=>{
        this.props.dispatch(taskNextCreator(tid));
    }
    onTaskDelete=(tid)=>{
        this.props.dispatch(taskDeleteCreator(tid));
    }
    render(){
        console.log('App rendering...');
        return <TaskPage tasks={this.props.tasks} title={this.props.title}
                         onTaskNext={this.onTaskNext}
                         onCreateTask={this.onCreateTask}
                         onTaskDelete={this.onTaskDelete}
        />
    }
}

function mapStateToProps(state){
    const {title, tasks} = state;
    return {title, tasks};
}

export default connect(mapStateToProps)(App);
