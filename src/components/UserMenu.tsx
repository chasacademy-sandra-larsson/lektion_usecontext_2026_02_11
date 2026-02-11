import { useContext } from "react";
import { UserContext } from "../context/UserContext"

// Här ska vi använda useContext för att hämta user-objektet från UserContext

export default function UserMenu() {


const context = useContext(UserContext);

  if(!context) {
    throw new Error("UserMenu must be in a UserContextProvider")
  }

  // setUser behövs inte här, kan tas bort
  const { user, setUser} = context;

  return (
    <div className="text-sm text-black">
       <p>Inloggad som: {user.name}</p>
    </div>
  );
}

