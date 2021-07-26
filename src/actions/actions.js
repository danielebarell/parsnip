let id = 0;
function getUniqueId(){
    return id++;
}
function newTaskCreator(title, description, status = "Unstarted"){
    console.log('actions, newTaskCreator');
    const newTask = {
        title,
        description,
        status,
        id: getUniqueId()
    };
    return {
        type: 'CREATE_TASK',
        payload: {
            newTask
        }
    };
}
function taskNextCreator(tid){
    return {
        type: 'TASK_NEXT',
        payload:{tid}
    }
}
function taskDeleteCreator(tid){
    return {
        type: 'TASK_DELETE',
        payload:{tid}
    }
}
export {taskNextCreator,newTaskCreator,taskDeleteCreator,getUniqueId}
