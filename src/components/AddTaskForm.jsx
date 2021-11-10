import React from 'react';
import classes from '../styles/AddTaskForm.module.css';

const CreationField = () => {
  return (
    <div className={classes.wrap}>
      <input className={classes.field} type="text" />
      <div className={classes.btn}>+</div>
    </div>
  )
}

export default CreationField;
