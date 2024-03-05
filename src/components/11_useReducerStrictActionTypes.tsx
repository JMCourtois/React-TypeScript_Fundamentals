import React, { useReducer } from "react";

type CounterState = {
	count: number
}


// Here we have the descriminated unions and it's recomended for typing reducer Hooks. 
type UpdateAction = {
	type: 'increment' | 'decrement',
	payload: number
}
type ResetAction = {
	type: 'reset'
}
type CounterAction = UpdateAction | ResetAction

// Here we can use template literals to tell our counteraction which values will it take
// type CounterAction = {
// 	type: 'increment' | 'decrement' | 'reset',
// 	payload?: number
// }

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + action.payload }
		case 'decrement':
			return { count: state.count - action.payload }
		case 'reset':
			return initialState
		default:
			return state
	}
}

const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<>
			Count: {state.count}
			<button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment 10</button>
			<button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement 10</button>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
		</>
	)
}

export { Counter }
