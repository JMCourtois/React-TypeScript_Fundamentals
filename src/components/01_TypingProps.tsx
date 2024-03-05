import React from "react";

// we create a type for our props here, this will also help to avoid passing any other type to name different to "string" once we call our Component 
type GreetProps = {
	name: string
}

// Usually we use types to build applications and interfaces for building libraries

// props cannot have implicitly type any
const Greet = (props: GreetProps) => {
	return (
		<div>
			<h2>Welcome {props.name}! You have 10 unread messages</h2>
			<p>Texto</p>
		</div>
	)
}

// export { Greet }
