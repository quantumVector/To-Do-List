
const initialState = {
  tasksList: [],
  total: 0,
};

const task = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasksList: [
          ...state.tasksList,
          { id: action.id, text: action.text, date: action.date }
        ],
        total: state.total + 1,
      };

    case 'DELETE_TASK': {
      // creating tasks list clone
      const taskListClone = JSON.parse(JSON.stringify(state.tasksList));
      // looking for task index in array
      const idx = taskListClone.findIndex((item) => item.id === action.id);
      // delete the task from the clone, and then set a new task list
      taskListClone.splice(idx, 1);

      return {
        ...state,
        tasksList: taskListClone,
        total: state.total - 1,
      };
    }

    case 'EDIT_TASK': {
      const taskListClone = JSON.parse(JSON.stringify(state.tasksList));

      taskListClone.forEach(item => {
        if (item.id === action.id) item.text = action.text;
      })

      return {
        ...state,
        tasksList: taskListClone,
      };
    }

    default:
      return state;
  }
};

export default task;