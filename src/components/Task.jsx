import React, { useState } from 'react';
import Checkbox from 'react-custom-checkbox';
import classes from '../styles/Task.module.css';

import checkIcon from '../assets/check.png';
import editImg from '../assets/edit.png';
import editHoverImg from '../assets/edit-hover.png';
import deleteImg from '../assets/delete.png';
import deleteHoverImg from '../assets/delete-hover.png';

function Task() {
  const [editIcon, setEditIcon] = useState(editImg);
  const [deleteIcon, setDeleteIcon] = useState(deleteImg);

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
      />
      <div className={classes.text/* +' '+classes.done */}>Buy Pizza on the way to work</div>
      <div>
        <div className={classes.time}>10 ноября 5:00</div>
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
