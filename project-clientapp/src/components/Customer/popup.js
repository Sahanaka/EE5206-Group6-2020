import React, { useState } from 'react';
import PopupDetails from './popupdetails';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
 

function Popup() {
  let history = useHistory()
  
  const handleClickOpen = () => {
    
    history.push({pathname: '/shops'});
    
  };

  return <div>

    {<PopupDetails
      content={<>
        <b>Oder Sucsessfull</b>
        
        <br/>
        <button onClick={handleClickOpen}>Thank You !! Come Again </button>
      </>}
      
    />}
  </div>
}

export default Popup;