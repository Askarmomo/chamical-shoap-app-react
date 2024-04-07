import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DashboardPage from "./pages/DashboardPage"
import IconPage from "./pages/IconPage"
import UserProfilePage from './pages/UserProfilePage'
import LoginPage from './pages/LoginPage'
import RigisterPage from './pages/RigisterPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DashboardPage />
      },
      {
        path: "icons",
        element: <IconPage />
      },
      {
        path: "userprofile",
        element: <UserProfilePage />,
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "rigister",
        element: <RigisterPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
