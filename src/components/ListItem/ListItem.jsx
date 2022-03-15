import React, { useState } from 'react';
import './ListItem.css';

const ListItem = ({cache}) => {
    const [expanded, setExpand] = useState(false)

    return (
        <div className='item-wrapper'>

    <div  
    className={expanded ? 'item-container-open' : 'item-container-closed'} 
        onClick={(e)=> {!expanded ? setExpand(true) : setExpand(false)
            console.log('clicked', expanded)
        }
    }>
        <div className='item-preview'>
            <span className='item-title'>{cache.title}</span>
            <span className='item-issn'>{cache.ISSN[0]}</span>
        </div>
        <div className='item-details'>
            <span>{cache.publisher}</span>
            <span>{cache.subjects[0].name}</span>
        </div>
        </div>
    </div>
        
    )
}

export default ListItem;