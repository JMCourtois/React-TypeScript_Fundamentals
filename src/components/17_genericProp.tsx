import React from "react";

// T means just Type, but we can use any label we want
type ListProps<T> = {
	items: string[] | number[]
	onClick: (value: string | number) => void
}

const List = ({ items, onClick }: ListProps) => {
	return (
		<div>
			<h2>List of items</h2>
			{items.map((item, index) => {
				return (
					<div key={index} onClick={() => onClick(item)}>
						{item}
					</div>
				)
			})}
		</div>
	)
}

export { List }
