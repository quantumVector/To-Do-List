/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import classes from '../styles/Popup.module.css';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { hidePopup } from '../redux/actions/popup';

const Popup = () => {
  const dispatch = useDispatch();
  const display = useSelector(({ popup }) => popup.display);
  const text = useSelector(({ popup }) => popup.text);
  const [showAnimation, setShowAnimation] = React.useState(false);
  const [hideAnimation, setHideAnimation] = React.useState(false);

  React.useEffect(() => {
    // popup display and animation control
    if (display) {
      setShowAnimation(true);
      new Promise((resolve, reject) => {
        setTimeout(() => {
          dispatch(hidePopup());
          setShowAnimation(false);
          setHideAnimation(true);
          resolve();
        }, 3000);
      })
        .then(() => {
          setTimeout(() => setHideAnimation(false), 1000)
        });
    }
  }, [display]);

  return (
    <div className={cn(classes.wrap, {
      [classes.enable]: showAnimation,
      [classes.disable]: hideAnimation,
    })}>
      <div className={classes.text}>{text}</div>
    </div >
  )
}

export default Popup;
