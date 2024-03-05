import React from "react";
import { ComponentProp } from "./components/16_componentProp";
import { List } from "./components/17_genericProp";

const App: React.FC = () => {
	return (
		<div>
			<ComponentProp/>
			<List 
				items={['Batman', 'Superman', 'Wonder Woman']}
				onClick={(item) => console.log(item)}
			/>
			<List 
				items={[1, 2, 3]}
				onClick={(item) => console.log(item)}
			/>
		</div>
	)
}

export { App }
