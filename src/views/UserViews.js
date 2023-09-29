import { Outlet, Route, Routes } from "react-router-dom"
import { ItemsList } from "../components/items/ItemsList"
import { NewItemForm } from "../components/forms/CreateItem"
import { WelcomePage } from "../components/WelcomePage"
import { NavBar } from "../components/Nav/NavBar"
import { HomePage } from "../components/HomePage"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { EditLoanedItemForm } from "../components/forms/EditLoanedItem"
import { Authorized } from "./Authorized"
import { ApplicationViews } from "./ApplicationViews"


export const UserViews = ({ currentUser }) => {
    return (
        <Routes>
        
        <Route
        path="/"
        element={
            <>
                <NavBar />
                <Outlet />
             </>
            }
            > 
              <Route index element={<WelcomePage />} />

              <Route path="/login" 
                    element={<Login />}/>

              <Route path="/home"
                    element={<HomePage />}/>

              <Route path="/signUp"
                    element={<Register />}/>

              <Route path="/myItems"
                    element={<ItemsList currentUser={currentUser} />}
                    />

              <Route path="/addItems"
                element={<NewItemForm />} />

              <Route path="/editItems/:itemId" 
                    element={<EditLoanedItemForm />}/>

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
  
        )
}