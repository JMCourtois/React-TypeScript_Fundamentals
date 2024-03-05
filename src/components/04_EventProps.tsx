import React from "react";

type ButtonProps = {
	handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
const Button = (props: ButtonProps) => {
	return (
		<button onClick={(event) => props.handleClick(event, 1)}>Click</button>
	)
}


type InputProps = {
	value: string, 
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
// This is the handleChange event passed as a prop
// const Input = (props: InputProps) => {
// 	return (
// 		<input type="text" value={props.value} onChange={props.handleChange}/>
// 	)
// But you can define the handler inside the component aswell 
const Input = (props: InputProps) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event, 'From the Input Element, not a prop');
	}
	return (
		<input type="text" value={props.value} onChange={handleInputChange}/>
	)
}


export { Button, Input }
