import { useUser } from "../context/UserContext"

// Här ska vi använda useContext för att hämta user-objektet från UserContext

export default function UserMenu() {

  const context = useUser();

  // setUser behövs inte här, kan tas bort
  const { user, setUser} = context;

  return (
    <div className="text-sm text-black">
       <p>Inloggad som: {user.name}</p>
    </div>
  );
}

