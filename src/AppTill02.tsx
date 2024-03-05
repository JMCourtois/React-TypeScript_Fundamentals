import React from "react";
import { Greet, Person, PersonList } from "./components/02_BasicPropsTypes";

const App: React.FC = () => {
	const personName = {
		first: 'Brucie',
		last: 'Waynie'
	}
	const nameList = [
		{
			first: 'Bruce',
			last: 'Wayne'
		},
		{
			first: 'Clark',
			last: 'Kent'
		},
		{
			first: 'Princess',
			last: 'Diana'
		}
	]
	return (
		<div>
			<Greet messageCount={20} isLoggedIn/>
			<Person name={personName}/>
			<PersonList names={nameList} />
		</div>
	)
}

export { App }
