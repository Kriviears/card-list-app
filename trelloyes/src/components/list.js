import React from 'react';
import './list.css';
import Card from './card';


function List(props) {
    console.log(props.id)
    return(
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {props.cards.map((card, id)=>
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        content={card.content}
                        handleDeleteItem={props.handleDeleteItem}
                    />
                )}
                <button 
                    type='button' 
                    className='List-add-button'
                    onClick={props.handleAddItem}>
                    + Add Random Card
                </button>
            </div>
        </section>

    );
}

export default List;