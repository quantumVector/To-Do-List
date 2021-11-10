import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/tasks';
import classes from '../styles/AddTaskForm.module.css';

const CreationField = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState('');
  const [taskId, setTaskId] = React.useState(1);
  const tasksList = useSelector(({ tasks }) => tasks.tasksList);

  const onAddTask = () => {
    //checking for the presence of the same task
    const identicalText = tasksList.find(item => item.text === inputValue);

    if (inputValue && !identicalText) {
      dispatch(addTask(taskId, inputValue));
      setTaskId(taskId + 1);
    }
  };

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
