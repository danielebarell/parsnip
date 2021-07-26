const mockTasks = [
    {
        id: 1,
        title: 'Learn Redux',
        description: 'The store, actions, and reducers, oh my!',
        status: 'In Progress',
    },
    {
        id: 2,
        title: 'Peace on Earth',
        description: 'No big deal.',
        status: 'In Progress',
    },
];
const status_enums = [
    {sid: 0, original: 'Unstarted', label: 'To Do'},
    {sid: 1, original: 'In Progress', label: 'Doing'},
    {sid: 2, original: 'Completed', label: 'Done'}
]
const board = {
    title: 'Parsnip',
    tasks: mockTasks
};

export {board, status_enums};
