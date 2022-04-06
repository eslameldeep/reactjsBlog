import React, { useReducer, useState } from 'react'

export function ReducerEx() {
     const [count, setCount] = useState(0);
    
    function reducer(state , action) {
        console.log(action);
        switch (action.type ) {
            case "increment":
                return {count: state.count + action.payload};
            case "decrement":
                return {count: state.count - action.payload};
            default:
                return {count: state.count };
        }
    
    }
    const [state, dispatch] = useReducer(reducer, {count: 0} ) ; 
    return (
        <div>
            <button onClick={() => setCount(count + 1) }>increment</button>
            <button onClick={() => setCount(count - 1) }>decrement</button>
            <h1>{count}</h1>
            
            <button onClick={() => dispatch({type : "increment" , payload : count }) }>increment</button>
            <button onClick={() => dispatch({type : "decrement" , payload : count }) }>decrement</button>
            <h1>{state.count}</h1>
        </div>
    )
}

