import React from 'react';
import classes from '../styles/Header.module.css';

function Header() {
  return (
    <div className={classes.wrap}>
      <div className={classes.title}>To Do List</div>
      <div className={classes.total}>
        <span className={classes.num}>12 </span>
        Tasks
      </div>
    </div>
  )
}

export default Header;
