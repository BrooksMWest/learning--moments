// import { Link, useNavigate } from "react-router-dom"
// import "./NavBar.css"

// export const UserNavBar = () => {
//   const navigate = useNavigate()

//   return (
//     <ul className="navbar">
//       <li className="navbar__item">
//       <Link className="navbar__link"
//        to="/signUp"
//         onClick={() => {
//         localStorage.removeItem("currentUser")
//         navigate("/login", { replace: true })
//       }}
//       >
//     Sign Up
//     </Link>
//     </li>
//         <li className="navbar__item">
//         <Link className="navbar__link" to="/login">
//          Login
//         </Link>
//       </li>

//       <li className="navbar__item">
//         <Link className="navbar__link" to="/Home">
//          Home
//         </Link>
//       </li>

//         <li className="navbar__item">
//             <Link className="navbar__link" to="/myItems">
//               My Loaned Items
//             </Link>
//         </li>

//       <li className="navbar__item">
//         <Link className="navbar__link" to="/addItems">
//           Add an Item
//         </Link>
//       </li>

//       <li className="navbar__item">
//         <Link className="navbar__link" to="/editItems">
//           Edit an Item
//         </Link>
//       </li>

//       {localStorage.getItem("currentUser") ? (
//       <li className="navbar__item">
//         <Link className="navbar__link" to=""
//         onClick={() => {
//           localStorage.removeItem("currentUser")
//           navigate("/login", { replace : true })
//         }}>
//           Logout
//       </Link>
//       </li>
//       ) : (
//         ""
//       )}
//     </ul>
//   )
// }