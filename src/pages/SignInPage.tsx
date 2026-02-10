

export default function SignInPage() {

  // Här ska vi använda useContext för att hämta user-objektet från UserContext
  // och använda det för att sätta user-objektet i UserContext
  // och navigera till dashboard-sidan
  // och använda det för att sätta user-objektet i UserContext
  // och navigera till dashboard-sidan

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-6">Sign In</h1>
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                // setUser({ name: username, role: "user" });
                // navigate("/dashboard");
              }}
            >
                <input
                  type="text"
                  placeholder="Username"
                  className="border border-gray-300 rounded-md p-2"
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white rounded-md p-2">Sign In</button>
            </form>
        </div>
    )
}