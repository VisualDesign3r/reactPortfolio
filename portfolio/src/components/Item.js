import { createContext } from 'react';
// this SHOULD BE IN A SEPARATE FILE
// 2. Extract this to its own context file (contexts/PersonContext)
const Item = createContext({
    name: 'Project 1',
    age: 0,
});

export default Item;
