import React, { Component } from 'react';
import './App.css';
import List from './components/list';
import STORE from './store';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}
class App extends Component {
  state = {
    lists: STORE.lists,
    allCards: STORE.allCards
  }

  handleDeleteItem =(cardId)=>{
    console.log('item deleted', cardId)
    const {lists, allCards} = this.state
    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }))

    const newCards = omit(allCards, cardId)

    this.setState({
      lists: newLists,
      allCards: newCards
    })
  }
  
  

  handleAddItem =(key)=>{
    console.log('Item added')
    newRandomCard()
  }
  

  render() {
  
    console.log(this.state.lists[0].cardIds)

    return (
      <main className="App">
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
              <List
                key={list.id}
                id={list.id}
                header={list.header}
                cards={list.cardIds.map(id =>  this.state.allCards[id] )}
                handleAddItem={this.handleAddItem}
                handleDeleteItem={this.handleDeleteItem}
              />
            ))}
        </div>
      </main>
    );
  }
}

export default App;
