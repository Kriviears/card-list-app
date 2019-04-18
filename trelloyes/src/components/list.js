import React from 'react';
import './list.css';
import Card from './card';


function List(props) {
    // let cardIds = STORE.lists.find(list=>{
    //     if(list.header === props.header) return list;
    // });
    // cardIds=cardIds.cardIds;
    // console.log(cardIds);

    // let cards = cardIds.map(card =>{
    //     return <Card title={STORE.allCards.card.title} content={STORE.allCards.card.content} />;
    // });
    // console.log(cards);

    return(
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {props.cards.map((card)=>
                    <Card>
                        key={card.id}
                        title={card.title}
                        content={card.content}
                    </Card>
                )}
                <button type='button' className='List-add-button'>+ Add Random Card</button>
            </div>
        </section>

    );
}

export default List;