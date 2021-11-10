import React from 'react';
import { useDispatch } from 'react-redux';
import Checkbox from 'react-custom-checkbox';
import classes from '../styles/Task.module.css';
import cn from 'classnames';
import { deleteTask } from '../redux/actions/tasks';
import Field from './Field';
import Button from './Button';

import checkIcon from '../assets/check.png';
import editImg from '../assets/edit.png';
import editHoverImg from '../assets/edit-hover.png';
import activeEditImg from '../assets/edit-active.png';
import deleteImg from '../assets/delete.png';
import deleteHoverImg from '../assets/delete-hover.png';
import okImg from '../assets/ok.png';
import resetImg from '../assets/reset.png';

function Task({ id, text, date }) {
  const dispatch = useDispatch();
  const [taskStatus, setTaskStatus] = React.useState(false);
  const [editMod, setEditeMod] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [activeEditIcon, setActiveEditIcon] = React.useState(false);

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
        : <Field value={inputValue} setValue={setInputValue} width='400px' />}
      <div>
        <div className={classes.time}>{date}</div>
        <div className={classes.btnWrap}>
          {!activeEditIcon
            ? <Button img={editImg} hoverImg={editHoverImg} fn={() => {
              setEditeMod(true);
              setActiveEditIcon(true);
            }} />

            : <>
              <Button img={resetImg} fn={() => {
                setEditeMod(false);
                setActiveEditIcon(false);
                setInputValue('');
              }} />
              <Button img={okImg} fn={() => {
                setEditeMod(false);
                setActiveEditIcon(false);
              }} />
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
