import React from 'react';
import { GreetProps } from './Greet.types'; // This allow us to use the type in different places at the same time 


// But in large projects we usually want to separate the types in different files. 
// type GreetProps = {
// 	name?: string, // This is optional
// 	messageCount: number,
// 	isLoggedIn: boolean
// }


// Lets take our Greet Component to make an example of destructuring props
const Greet = ({ name = 'Any Name', messageCount, isLoggedIn }: GreetProps) => {
	return (
		<div>
			<h2>
				{isLoggedIn ? `Welcome ${name}! You have ${messageCount} unread messages` : 'Welcome Guest'}
			</h2>
			<p>Texto</p>
		</div>
	)
}

export { Greet }
