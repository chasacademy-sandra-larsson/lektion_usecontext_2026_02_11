import { createBrowserRouter } from "react-router"
import Dashboard from "./pages/Dashboard"
import SignInPage from "./pages/SignInPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
])
 
export default router