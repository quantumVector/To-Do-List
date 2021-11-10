import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showPopup } from '../redux/actions/popup';
import { addTask } from '../redux/actions/tasks';
import classes from '../styles/AddTaskForm.module.css';
import Field from './Field';

const CreationField = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState('');
  const [taskId, setTaskId] = React.useState(1);
  const tasksList = useSelector(({ tasks }) => tasks.tasksList);

  const onAddTask = () => {
    //checking for the presence of the same task
    const identicalText = tasksList.find(item => item.text === inputValue);

    let message;
    if (!inputValue) message = `Can't send empty text`;
    if (identicalText) message = 'This task already exists';

    if (inputValue && !identicalText) {
      const date = setDate();
      dispatch(addTask(taskId, inputValue, date));
      setTaskId(taskId + 1);
      setInputValue('');
    } else {
      dispatch(showPopup(message));
    }
  };

  const setDate = () => {
    const date = new Date();
    const options = {
      month: 'long',
      day: 'numeric',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
    };

    return date.toLocaleString("en-US", options);
  }

  return (
    <div className={classes.wrap}>
      <Field value={inputValue} setValue={setInputValue} width='520px' />
      <div className={classes.btn}
        onClick={onAddTask}>+</div>
    </div>
  )
}

export default CreationField;
