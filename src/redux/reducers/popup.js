
const initialState = {
  display: false,
  text: '',
};

const popup = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POPUP':
      return {
        ...state,
        display: true,
        text: action.message,
      };

    case 'REMOVE_POPUP':
      return {
        ...state,
        display: false,
        text: '',
      };

    default:
      return state;
  }
};

export default popup;