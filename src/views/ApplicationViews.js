import { useState, useEffect } from "react"
import { NavBar } from "../components/Nav/NavBar"
import { Outlet, Route, Routes } from "react-router-dom"
import { ItemsList } from "../components/items/ItemsList"
import { NewItemForm } from "../components/forms/CreateItem"
import { Login } from "../components/auth/Login"
import { WelcomePage } from "../components/WelcomePage"
import { HomePage } from "../components/HomePage"
import { Register } from "../components/auth/Register"
import { EditLoanedItemForm } from "../components/forms/EditLoanedItem"
import { Authorized } from "./Authorized"




export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

useEffect(() => {
  const localLearningUser = localStorage.getItem("currentUser")
  const learningUserObject = JSON.parse(localLearningUser)

  setCurrentUser(learningUserObject)
}, [])

    return  (

        <>
    <NavBar />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
            </>
        }
        >  
          <Route index />
          <Route path="/login" element={<Login />}/>
          <Route path="/welcome" element={<WelcomePage /> }/> 
          <Route path="/home" element={<HomePage />}/>
          <Route path="/signUp" element={<Register />}/>
          <Route path="/myItems" element={<ItemsList currentUser={currentUser}/>} />
          <Route path="/addItems"element={<NewItemForm currentUser={currentUser} />} />
          <Route path="/editItems/:itemId" element={<EditLoanedItemForm currentUser={currentUser}/>}/>
          <Route path="/logOut" />
          <Route 
            path="*" 
            element={
              <Authorized>
                <ApplicationViews />
              </Authorized>
            }
        />
          
      </Route>
    </Routes>
    </>

    )

}