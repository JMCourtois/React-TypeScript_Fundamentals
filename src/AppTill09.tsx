import React from "react";
import { Container } from "./components/05_StyleProps";
import { Greet } from "./components/06_PropsTypesAndTips";
import { LoggedIn } from "./components/07_useStateHook";
import { User } from "./components/08_useStateFutureValue";

const App: React.FC = () => {
	return (
		<div>
			<Container styles={{ border: `1px solid black`, padding: `1rem` }}/>
			<Greet messageCount={20} isLoggedIn/>
			<LoggedIn />
			<User />
		</div>
	)
}

export { App }
