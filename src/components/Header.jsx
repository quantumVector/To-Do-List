import React from 'react';
import { useSelector } from 'react-redux';
import classes from '../styles/Header.module.css';

function Header() {
  const total = useSelector(({ tasks }) => tasks.total);

  return (
    <div className={classes.wrap}>
      <div className={classes.title}>To Do List</div>
      {total > 0 &&
        <div className={classes.total}>
          <span className={classes.num}>{total} </span>
          {total > 1 ? 'Tasks' : 'Task'}
        </div>}
    </div>
  )
}

export default Header;
