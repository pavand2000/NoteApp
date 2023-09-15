import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote';
import Note from './Note';
import './App.css'

const App = () => {

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
      // alert('I am clicked');
      setAddItem((prevData) => {
        return [...prevData, note];
      });

      console.log(addItem);
  };

  return (
    <>
    <Header/>
  
    <CreateNote passNote = {addNote}/>
    <Note/>

    {addItem.map((val, index) => {
      return (<Note 
      key={index}
      id={index}
      title={val.title}
      content={val.content}
      />)
    })}

      <Footer/>
    
    </>
  );
}

export default App;