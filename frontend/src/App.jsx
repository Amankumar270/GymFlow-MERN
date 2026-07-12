import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import Products from "./components/Products"

function App(){
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </div>
  )
}

export default App;