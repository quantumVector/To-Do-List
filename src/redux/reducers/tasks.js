
const initialState = {
  tasksList: [],
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
      };

    default:
      return state;
  }
};

export default task;