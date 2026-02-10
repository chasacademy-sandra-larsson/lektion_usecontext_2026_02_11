// ProfileWidget.tsx

// Här ska vi använda useContext för att hämta user-objektet från UserContext

export default function ProfileWidget() {



  return (
    <div className="bg-white p-4 rounded-md">
      <p className="text-lg font-bold mb-2">Profil</p>
      {/* <p className="text-sm text-gray-500 mb-2">Name: {user.name || "Ej inloggad"}</p>
      <p className="text-sm text-gray-500 mb-2">Role: {user.role}</p> */}
    </div>
  );
}