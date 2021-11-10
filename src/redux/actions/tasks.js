export const addTask = (id, text, date) => ({
  type: 'ADD_TASK',
  id, text, date
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  id,
});

export const editTask = (id) => ({
  type: 'EDIT_TASK',
  id,
});