
import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './App.css'


const Note = (props) => {
  return (
    <>
    <div className="note">
        <h1>{props.title}</h1>
        <br/>
        <p>{props.content}</p>
        <DeleteOutlineIcon className='' />
    </div>
    
    </>
  );
};

export default Note;