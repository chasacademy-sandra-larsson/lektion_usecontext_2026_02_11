import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import router from './router.tsx'
import "./index.css";''
import { UserProvider } from './context/UserContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* UserProvider wrappas runt root-komonenten och det medför 
    att alla dessa children-komponenter nu har access till context-objektet */}
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
)

