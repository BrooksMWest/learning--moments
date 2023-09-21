import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {

  return (
    <ul className="navbar">
        <li className="navbar__item">
        <Link className="navbar__link" to="/">
         Login
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="Home">
         Home
        </Link>
      </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="myItems">
              My Loaned Items
            </Link>
        </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="addItems">
          Add an Item
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="editItems">
          Edit an Item
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="logOut">
          Logout
        </Link>
      </li>
    </ul>
  )
}