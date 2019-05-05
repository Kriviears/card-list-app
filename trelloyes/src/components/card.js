import React from 'react';
import './card.css';

export default function Card(props){
    console.log(props.key)
    return(
        <div className='Card'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>

            <button type='button' 
            onClick={()=>props.handleDeleteItem(props.id)}>delete</button>
        </div>
    );
}

Card.propTypes ={
    handleDeleteItem: () =>{}
}
