import React, {useState, useRef, useEffect} from "react";

// This is how to type DOM References, we need to specify the DOMElement Type
const DomRef = () => {
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		inputRef.current?.focus()
	}, [])

	return (
		<div>
			<input type="text" ref={inputRef} />
		</div>
	)
}

// In the case of Mutable References we need to specify the type that will work for our functions.  
const MutableRef = () => {
	const [timer, setTimer] = useState(0)
	const interValRef = useRef<number | undefined>(undefined) // Here we need to give the number type to the Ref, cause setInterval can return also a num 

	const stopTimer = () => {
		window.clearInterval(interValRef.current) // .clearInterval() receives number or undefined, not null
	}
	useEffect(() => {
		interValRef.current = window.setInterval(() => {
			setTimer((timer) => timer + 1)
		}, 1000)
		return () => {
			stopTimer();
		}
	}, [])

	return (
		<div>
			HookTimer - {timer} -
				<button onClick={() => stopTimer()}>Stop Timer</button>
		</div>
	)
}

export { DomRef, MutableRef }
