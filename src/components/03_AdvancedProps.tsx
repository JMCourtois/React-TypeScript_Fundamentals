import React from "react";

// to avoid passing a string that doesn't make sense in our logic to Status lets use the union of string literals
type StatusProps = {
	status: 'loading' | 'success' | 'error'
}
const Status = (props: StatusProps) => {
	let message= '';
	if (props.status === 'loading') {
		message = 'Loading...';
	} else if (props.status === 'success') {
		message = 'Data fetched successfully!';
	} else if (props.status === 'error') {
		message = 'Error fetching data';
	}

	return (
		<div>
			<h2>Status = {message}</h2>
		</div>
	)
}


// Now lets use the prop children to pass content to our component
type HeadingProps = {
	children: string
}
const Heading = (props: HeadingProps) => {
	return <h2>{props.children}</h2>
}


// Another variant is to pass a component as a children, so let's see it's types
type OscarProps = {
	children: React.ReactNode
}
const Oscar = (props: OscarProps) => {
	return (
		<div>{props.children}</div>
	)
}

export { Status, Heading, Oscar }
