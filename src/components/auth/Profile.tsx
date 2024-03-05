import React from "react";

// We need to export the type to use it in our Component in Private
type ProfileProps = {
	name: string
}

const Profile = ({name}: ProfileProps) => {
	return <div>Private Profile component Name is {name}</div>
}

export { Profile, ProfileProps }
