import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DashboardPage from "./pages/DashboardPage"
import IconPage from"./pages/IconPage"
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
        element:<IconPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
