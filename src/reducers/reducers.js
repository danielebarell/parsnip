import {getUniqueId} from "../actions/actions";

const mockTitle = 'Parsnip';
const mockTasks = [
    {
        id: getUniqueId(),
        title: 'Learn Redux',
        description: 'The store, actions, and reducers, oh my!',
        status: 'In Progress',
    },
    {
        id: getUniqueId(),
        title: 'Peace on Earth',
        description: 'No big deal.',
        status: 'In Progress',
    },
];

export default function newTaskReducer(state = {tasks: mockTasks, title:mockTitle}, action){
    if(action.type === 'CREATE_TASK'){
        console.log('adding new task');
        const newTasks = [...state.tasks];
        newTasks.push(action.payload.newTask);
        const newState = {...state, tasks: newTasks};
        console.log(newState);
        return newState;
    }
    if(action.type === 'TASK_DELETE'){
        console.log('Deleting task',action.payload.tid);
        const nTasks = [...state.tasks];
        const index = nTasks.findIndex(
            t => t.id === action.payload.tid
        );
        nTasks.splice(index, 1);
        return {...state,tasks: nTasks}
    }
    if(action.type === 'TASK_NEXT'){
        console.log('moving task to the next state');
        const tasks = [...state.tasks];
        const index = tasks.findIndex(
            t => t.id === action.payload.tid
        );
        const taskToMove = tasks[index];
        //console.log('passing task to the next list',taskToMove, tasks);
        let newStatus = '';
        switch(taskToMove.status){
            case 'Unstarted':
                newStatus = 'In Progress';
                break;
            case 'In Progress':
                newStatus = 'Completed';
                break;
            default:
                console.error('Decide what to do with a completed task (Remove?)...');
                break;
        }
        taskToMove.status = newStatus;
        const veryNewState = {...state, tasks:[...tasks]};
        //console.log('then: ',veryNewState)
        return veryNewState;
    }
    return state;
}
