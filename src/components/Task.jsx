import React, { useState } from 'react';
import Checkbox from 'react-custom-checkbox';
import classes from '../styles/Task.module.css';
import cn from 'classnames';

import checkIcon from '../assets/check.png';
import editImg from '../assets/edit.png';
import editHoverImg from '../assets/edit-hover.png';
import deleteImg from '../assets/delete.png';
import deleteHoverImg from '../assets/delete-hover.png';

function Task({ id, text, date }) {
  const [editIcon, setEditIcon] = useState(editImg);
  const [deleteIcon, setDeleteIcon] = useState(deleteImg);
  const [taskStatus, setTaskStatus] = useState(false);

  return (
    <div className={classes.wrap}>
      <Checkbox
        icon={
          <img src={checkIcon}
            style={{
              width: 20,
              backgroundColor: '#fa6767',
              borderRadius: '5px'
            }}
            alt="check" />
        }
        borderColor="#b2b3d0"
        borderWidth={1}
        borderRadius={5}
        size={18}
        className={classes.checkbox}
        onChange={() => setTaskStatus(!taskStatus)}
      />
      <div className={cn(classes.text, { [classes.done]: taskStatus })}>{text}</div>
      <div>
        <div className={classes.time}>{date}</div>
        <div className={classes.btnWrap}>
          <div className={classes.btn}
            onMouseOver={() => setEditIcon(editHoverImg)}
            onMouseOut={() => setEditIcon(editImg)}
            style={{ backgroundImage: `url(${editIcon})` }}>
          </div>
          <div className={classes.btn}
            onMouseOver={() => setDeleteIcon(deleteHoverImg)}
            onMouseOut={() => setDeleteIcon(deleteImg)}
            style={{ backgroundImage: `url(${deleteIcon})` }}>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Task;
