import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';

describe('List component testing', ()=>{
    const deck = [
        {title: "Second card", content: "lorem ipsum"},
        {title: "Third card", content: "lorem ipsum"},
        {title: "Fourth card", content: "lorem ipsum"},
        {title: "Sixth card", content: "lorem ipsum"},
        {title: "Eighth card", content: "lorem ipsum"},
        {title: "Ninth card", content: "lorem ipsum"},
        {title: "Eleventh card", content: "lorem ipsum"}
    ];

    it('renders without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<List header='test-list' cards={deck}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders as expected', ()=>{
        console.log(deck);
        const tree = renderer
            .create(<List header='Test-List' cards={deck}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});