import { Outlet, Route, Routes } from "react-router-dom";
import { NonUserNavBar } from "../components/Nav/NonUserNav";
import { WelcomePage } from "../components/WelcomePage";
import { ItemsList } from "../components/items/ItemsList";

export const NonUserViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <NonUserNavBar />
                        <Outlet />
                        </>
                }
             >
                <Route index element={<WelcomePage />} />
                <Route path="itemsList"
                element={<ItemsList currentUser={currentUser}/>}/>
            </Route>
        </Routes>

    )
}