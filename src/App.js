/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import ListContainer from './components/ListContainer/ListContainer';


// const searchCollections = (e) => {
//   e.preventDefault();
//   console.log("in submit")
//   alert('button is submitting fetch');
//   return   console.log("in submit")
// }

function App() {
  const [listOpen, setListOpen] = useState(false);
  const [query, setQuery] = useState([])

  const libRequest = async () => {
    try {
      const response = await fetch('https://api.crossref.org/journals?rows=10', {
        method: 'GET'
      });
      const data = await response.json();
      console.log('DATA:', data)
      console.log('array', data.message.items)
      if (data.status === 200) {
        // reroute to landing page or throw alert with 'login successful'
        // alert('Login Successful');
        return `${data.title} has successfully logged in`;
      }
      // enter you logic when the fetch is successful
    } catch (error) {
      // enter your logic for when there is an error (ex. error toast)
      // console.log(error);
      // throw new Error('Login Failed');
      return 'fetch attempt failed';
    }
  }

  const search = (e) => {
    e.preventDefault();
    console.log("in submit")
    // alert('button is submitting fetch');
    libRequest()
  }


  return (
    <div className="App">
     <button type='button' onClick={(e) => search(e)}>search</button>
    <ListContainer/>
    </div>
  );
}

export default App;
