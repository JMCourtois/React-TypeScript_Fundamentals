import React from "react";
import { Profile } from "./auth/Profile";
import { Private } from "./auth/Private";

const ComponentProp = () => {
	return (
		<div>
			<Private isLoggedIn={true} Component={Profile} />
		</div>
	)
}

export { ComponentProp }
