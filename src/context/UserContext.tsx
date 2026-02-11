import { createContext, useState } from 'react';


// Typen för vår user
interface User {
    name: string;
    role: string;
}

// Typen för vår vår userContext, vilker är en user, setUser (state)
interface UserContextType {
    user: User;
    setUser: (user: User) => void;
}
//const [user, setUser] = useState()


// Skpa context med undefined som default
export const UserContext = createContext<UserContextType | undefined>(undefined);


export function UserProvider() {

    // Här har vi state för user. Den skickas med genom providern och 
    // kan på så sätt nå alla komponenter vars parent är "wrappat" runt den.

    const [user, setUser] = useState<User>({
        name: "",
        role: "guest",
    })

    const value = { user, setUser }

    return (
        <UserContext.Provider value={value}>

        </UserContext.Provider>
     )

}

