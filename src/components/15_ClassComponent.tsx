import React, { Component } from "react"

// If we want to type the props we do this
// type CounterProps = {
// 	message: String
// }

type CounterState = {
	count: number
}


// <Props, State> if any of those is not present we use an empty object
class Counter extends Component<{}, CounterState> {
	state = {
		count: 0,
	} 

	handleClick = () => {
		this.setState((prevState) => ({ count: prevState.count + 1 }))
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Increment</button>
				{/* {this.props.message} */}
				{this.state.count}
			</div>
		)
	}
}

export { Counter }
