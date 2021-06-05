import React, { useState } from 'react';
import PopupDetails from './popupdetails';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
      <Button onClick={togglePopup} color="secondary">Ok

      </Button>
    {/* <input
   
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    /> */}
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    {isOpen && <PopupDetails
      content={<>
        <b>Oder Sucsessfull</b>
        
        {/* <img width="100" height="100" src="https://media.giphy.com/media/fxI0mULY4j8oZ9VK7X/giphy.gif"></img> */}
        <br/>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default Popup;