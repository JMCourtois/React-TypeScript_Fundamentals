import React, { useState, createContext } from "react"
import { User } from "../08_useStateFutureValue";


export type AuthUser = {
	name: string, 
	email: string
}

type UserContextType = {
	user: AuthUser | null,
	setUser: React.Dispatch<React.SetStateAction<AuthUser | null> >
}

const UserContext = createContext<UserContextType | null>(null);

type UserContextProviderProps = {
	children: React.ReactNode
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [user, setUser] = useState<AuthUser | null>(null);
	return <UserContext.Provider value={{ user, setUser }}>
		{children}
	</UserContext.Provider>
}

export { UserContext, UserContextProvider }
