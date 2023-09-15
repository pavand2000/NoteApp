import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from "@mui/icons-material/Add";


const CreateNote = (props) =>{
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const inputEvent = (e) => {
        const{ name, value} = e.target

        setNote((prevData)=> {
            return{
                ...prevData,
                [name]: value,

            };
        });
        console.log(note);
    };

    const addEvent = () => {
        props.passNote(note);
    };



  
    return(
        <>
        <div className="main_note">
        <input typr="text" placeholder='Title' name='title' value={note.title} onChange={inputEvent} />
        <textarea rows="" column="" placeholder='Write a note.....' autoComplete='off' name='content' value={note.content} onChange={inputEvent} />
        <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
        </Button>

        </div>
        
        
        
        </>
    )
}

export default CreateNote;