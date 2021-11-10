import { showPopup } from '../redux/actions/popup';

export const validator = (arr, value, dispatch) => {
  //checking for the presence of the same value
  const identicalValue = arr.find(item => item.text === value);

  let message;
  if (!value) message = `Can't send empty text`;
  if (identicalValue) message = 'This task already exists';

  if (value && !identicalValue) {
    return true;
  } else {
    dispatch(showPopup(message));
  }
}