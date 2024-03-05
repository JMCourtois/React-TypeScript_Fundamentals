import React from "react";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/12_useContextHook";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/13_useContextFutureValues";

const App: React.FC = () => {
	return (
		<div>
			<ThemeContextProvider>
				<Box />
			</ThemeContextProvider>

			<UserContextProvider>
				<User />
			</UserContextProvider>
		</div>
	)
}

export { App }
