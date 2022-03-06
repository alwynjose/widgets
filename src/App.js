import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is React?',
        content: 'item1'
    },
    {
        title: 'Why use it?',
        content: 'item2'
    }
]
const App = () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
}

export default App;