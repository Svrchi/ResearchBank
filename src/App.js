/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import ListContainer from './components/ListContainer/ListContainer';


const searchCollections = (e) => {
  e.preventDefault();
  console.log("in submit")
  alert('button is submitting fetch');
  return   console.log("in submit")
}

function App() {
  const [listOpen, setListOpen] = useState(false);
  return (
    <div className="App">
     <span>test</span>
     <button type='button' onSubmit={(e) => searchCollections(e)}> search</button>
    <ListContainer/>
    </div>
  );
}

export default App;
