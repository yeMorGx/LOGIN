import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import Singup from "./pages/singup"
import Login from "./pages/login/login"
import Dashboard from "./pages/Dashboard/dashboard"

function App() {

  return (
    <BrowserRouter>
      
      <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Singup />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
