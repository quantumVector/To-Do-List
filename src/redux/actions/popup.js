export const showPopup = (message) => ({
  type: 'SET_POPUP',
  message,
});

export const hidePopup = () => ({
  type: 'REMOVE_POPUP',
});