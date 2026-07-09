import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Add from "./pages/Add"
import List from "./pages/List"



function App (){
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <div className="flex-1">
         <Routes>
            <Route path="/add" element={<Add/>}/>
            <Route path="/list" element={<List/>}/>
         </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
