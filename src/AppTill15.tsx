import React from "react";
import { DomRef, MutableRef } from "./components/14_useRefHook";

const App: React.FC = () => {
	return (
		<div>
			<DomRef />
			<MutableRef />
		</div>
	)
}

export { App }
