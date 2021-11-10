import React from 'react';
import classes from '../styles/Button.module.css';

function Button({ img, hoverImg = img, fn }) {
  // hover effect for icon
  const [icon, setIcon] = React.useState(img);

  return (
    <div
      className={classes.btn}
      onMouseOver={() => setIcon(hoverImg)}
      onMouseOut={() => setIcon(img)}
      style={{ backgroundImage: `url(${icon})` }}
      onClick={fn}>
    </div>
  )
}

export default Button;
