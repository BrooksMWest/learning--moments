import { NavBar } from "./components/Nav/NavBar"
import { Outlet, Route, Routes } from "react-router-dom"
import { ItemsList } from "./components/items/ItemsList"
import { NewItemForm } from "./components/forms/CreateItem"
import { HomePage } from "./components/HomePage"
import "./App.css"
import { EditItemForm } from "./components/forms/EditItem"
import { ItemDetails } from "./components/items/itemDetails"

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
          <Route path="home" element={<HomePage />}/>
          <Route path="login" />
          <Route path="myItems" element={<ItemsList />} />
          <Route path=":itemId" element={<ItemDetails />} />
          <Route path="addItems"element={<NewItemForm />} />
          <Route path="editItems" element={<EditItemForm />}/>
          <Route path="logOut" />
          
      </Route>
    </Routes>
    </>
    )
  }

