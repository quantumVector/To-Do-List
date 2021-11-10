import React from 'react';
import { useDispatch } from 'react-redux';
import Checkbox from 'react-custom-checkbox';
import classes from '../styles/Task.module.css';
import cn from 'classnames';
import { deleteTask, editTask } from '../redux/actions/tasks';
import Button from './Button';

import checkIcon from '../assets/check.png';
import editImg from '../assets/edit.png';
import editHoverImg from '../assets/edit-hover.png';
import activeEditImg from '../assets/edit-active.png';
import deleteImg from '../assets/delete.png';
import deleteHoverImg from '../assets/delete-hover.png';
import confirmImg from '../assets/confirm.png';
import resetImg from '../assets/reset.png';

function Task({ id, text, date }) {
  const dispatch = useDispatch();
  const [taskStatus, setTaskStatus] = React.useState(false);
  const [editMod, setEditeMod] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [activeEditIcon, setActiveEditIcon] = React.useState(false);

  const edit = () => {
    setEditeMod(true);
    setActiveEditIcon(true);
  }

  const reset = () => {
    setEditeMod(false);
    setActiveEditIcon(false);
    setInputValue('');
  }

  const confirm = () => {
    dispatch(editTask(id, inputValue));
    setEditeMod(false);
    setActiveEditIcon(false);
    setInputValue('');
  }

  return (
    <div className={classes.wrap}>
      {!editMod
        ? <>
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
        </>
        : <input className={classes.field}
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)} />
      }

      <div>
        <div className={classes.time}>{date}</div>
        <div className={classes.btnWrap}>
          {!activeEditIcon
            ? <Button img={editImg} hoverImg={editHoverImg} fn={edit} />
            : <>
              <Button img={resetImg} fn={reset} />
              <Button img={confirmImg} fn={confirm} />
              <Button img={activeEditImg} />
            </>
          }
          <Button img={deleteImg} hoverImg={deleteHoverImg}
            fn={() => dispatch(deleteTask(id))} />
        </div>
      </div>

    </div >
  )
}

export default Task;
