import { NavBar } from "./components/Nav/NavBar"
import { Outlet, Route, Routes } from "react-router-dom"
import { ItemsList } from "./components/items/ItemsList"
import { NewItemForm } from "./components/forms/CreateItem"
import { HomePage } from "./components/HomePage"
import "./App.css"
import { EditLoanedItemForm } from "./components/forms/EditLoanedItem"
import { Register } from "./components/auth/Register"
import { Login } from "./components/auth/Login"
import { ApplicationViews } from "./views/ApplicationViews"
import { Authorized } from "./views/Authorized"
import { WelcomePage } from "./components/WelcomePage"

export const App = () => {
  return (
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
          <Route path="/myItems" element={<ItemsList />} />
          <Route path="/addItems"element={<NewItemForm />} />
          <Route path="/editItems/:itemId" element={<EditLoanedItemForm />}/>
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

