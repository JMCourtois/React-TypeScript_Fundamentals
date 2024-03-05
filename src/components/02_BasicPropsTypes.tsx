import React from "react";

// We need to consider that if we dont make a type optional, our componen will ask us for that prop
type GreetProps = {
	name?: string, // This is optional
	messageCount: number,
	isLoggedIn: boolean
}
const Greet = (props: GreetProps) => {
	const { name = 'Any Name' } = props;
	return (
		<div>
			<h2>
				{props.isLoggedIn ? `Welcome ${name}! You have ${props.messageCount} unread messages` : 'Welcome Guest'}
			</h2>
			<p>Texto</p>
		</div>
	)
}



type PersonProps = {
	name: {
		first: string,
		last: string
	}
}
const Person = (props: PersonProps) => {
	return <div>{props.name.first} {props.name.last}</div>
}


type PersonListProps = {
	names: {
		first: string,
		last: string
	}[]
}
const PersonList = (props: PersonListProps) => {
	return (
		<div>
			{props.names.map((name) => {
				return (
					<h2>{name.first} {name.last}</h2>
				)
			})}
		</div>
	)
}

export { Greet, Person, PersonList }

