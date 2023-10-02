import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/Nav/NavBar"
import { HomePage } from "./components/HomePage"
import "./App.css"
import { Register } from "./components/auth/Register"
import { Login } from "./components/auth/Login"
import { ApplicationViews } from "./views/ApplicationViews"
import { Authorized } from "./views/Authorized"

export const App = () => {
  return (
  
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/signUp" element={<Register />}/>

        
          <Route 
            path="*" 
            element={
              <Authorized>
                <ApplicationViews />
              </Authorized>
            }
        />
          
     
    </Routes>
   
    )
  }

export default App