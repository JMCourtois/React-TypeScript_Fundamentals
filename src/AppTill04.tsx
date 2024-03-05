import React from "react";
import { Status, Heading, Oscar } from "./components/03_AdvancedProps";
import { Button, Input } from "./components/04_EventProps";

const App: React.FC = () => {
	return (
		<div>
			<Status status="loading"/>
			<Oscar>
				<Heading>Oscar goes to Leonardo!</Heading>
			</Oscar>

			<Button handleClick={(event, id) => {
				console.log('Button clicked', event, id);
			}} />
			<Input value='' handleChange={event => console.log(event)}/>
		</div>
	)
}

export { App }
