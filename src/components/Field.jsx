import React from 'react';
import classes from '../styles/Field.module.css';

function Field({ inputValue, setValue, width }) {
  return (
    <input className={classes.field}
      type="text"
      value={inputValue}
      style={{ width }}
      onChange={e => setValue(e.target.value)} />
  )
}

export default Field;
