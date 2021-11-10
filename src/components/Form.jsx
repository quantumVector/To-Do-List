import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/tasks';
import classes from '../styles/Form.module.css';
import { validator } from '../utils/validator';

const CreationField = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState('');
  const [taskId, setTaskId] = React.useState(1);
  const tasksList = useSelector(({ tasks }) => tasks.tasksList);

  const onAddTask = () => {
    if (validator(tasksList, inputValue, dispatch)) {
      const date = setDate();
      dispatch(addTask(taskId, inputValue, date));
      setTaskId(taskId + 1);
      setInputValue('');
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
      <input className={classes.field}
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)} />
      <div className={classes.btn}
        onClick={onAddTask}>+</div>
    </div>
  )
}

export default CreationField;
