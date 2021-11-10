
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

    default:
      return state;
  }
};

export default task;