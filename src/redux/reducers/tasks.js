
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

    case 'DELETE_TASK':
      // creating tasks list clone
      const cloneTasksList = JSON.parse(JSON.stringify(state.tasksList));
      // looking for task id
      const idx = cloneTasksList.findIndex((item) => item.id === action.id);
      // delete the task from the clone, and then set a new task list
      cloneTasksList.splice(idx, 1);

      return {
        ...state,
        tasksList: cloneTasksList,
        total: state.total - 1,
      };

    case 'EDIT_TASK':
      return {
        ...state,
        tasksList: [
          ...state.tasksList,
          { id: action.id, text: action.text, date: action.date }
        ],
        total: state.total + 1,
      };

    default:
      return state;
  }
};

export default task;