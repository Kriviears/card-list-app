import React from 'react';
import './card.css';

export default function Card(props){
    //console.log('           card '+ props.cardId)
    return(
        <div className='Card'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>

            <button type='button' 
            onClick={()=>props.handleDeleteItem(props.cardId)}>delete</button>
        </div>
    );
}

Card.propTypes ={
    handleDeleteItem: () =>{}
}
