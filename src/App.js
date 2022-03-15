/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './App.css';
import ListContainer from './components/ListContainer/ListContainer';
import Pagination from './components/Pagination/Pagination';


function App() {
  const [listOpen, setListOpen] = useState(false);
  const [cache, setCache] = useState([])
  const [loading, setLoading] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)


  useEffect(()=> {
  }, [])

  const libRequest = async() => {
    setLoading(true)
    await fetch('https://api.crossref.org/journals?rows=100')
    .then(res => res.json())
    .then(data => setCache(data.message.items))
    setLoading(false)
  }

  const searchCollections = (e) => {
    libRequest()
    setListOpen(true)
  }

  const renderList = () => {
    if (listOpen) {
      return (
      <ListContainer cache={currentItems} loading={loading} />
      )
    }
  }

const indexOfLastItem = currentPage * itemsPerPage 
const indexOfFirstItem = indexOfLastItem - itemsPerPage
const currentItems = cache.slice(indexOfFirstItem, indexOfLastItem) 

const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
    <div className="App">
      {renderList()}
      <div className='button-container'>
    <button className='search-button' 
      type='button' 
      onClick={(e) => searchCollections(e)}>
      search
    </button>

    <Pagination 
      totalItems={cache.length} 
      itemsPerPage={itemsPerPage} 
      paginate={paginate} 
    />
    </div>
    </div>
  );
}

export default App;