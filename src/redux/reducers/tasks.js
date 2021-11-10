
const initialState = {
  tasksList: [],
};

const housingStock = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasksList: [
          ...state.tasksList,
          { id: action.id, text: action.text }
        ],
      };

    default:
      return state;
  }
};

export default housingStock;