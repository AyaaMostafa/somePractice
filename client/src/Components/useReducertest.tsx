import React, { useState, useReducer } from 'react';


type Action = 'Increment' | 'Decrement' | 'Reset';

const Test1: React.FC = () => {
   
   const initialState = 0;

   const reducer = (state: number, action: Action): number => {
      switch (action) {
         case 'Increment':
            return state + 1;
         case 'Decrement':
            return state - 1;
         case 'Reset':
            return initialState;
         default:
            return state;
      }
   };


   const [count, dispatch] = useReducer(reducer, initialState);

   return (
      <div>
         <h1>Count - {count}</h1>
         <button onClick={() => dispatch('Increment')}>Increment</button>
         <button onClick={() => dispatch('Decrement')}>Decrement</button>
         <button onClick={() => dispatch('Reset')}>Reset</button>
      </div>
   );
};

export default Test1;
