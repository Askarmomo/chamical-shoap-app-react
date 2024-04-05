import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
