import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
// import "./Login.css"
import { getUserByEmail } from "../../services/userService"

export const Login = () => {
  const [email, set] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    return getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            id: user.id,
          })
        )

        navigate("/home")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <main className="auth-container">
      <section>
        <form className="auth-form" onSubmit={handleLogin}>
          <h1 className="header">Welcome to the Loan Wolf</h1>
          <h2 className="subHeader">Please sign in</h2>

          <fieldset className="auth-fieldset">
          <div>
            <input
              onChange={(evt) => set(evt.target.value)}
              type="text"
              id="fullName"
              className="auth-form-input"
              placeholder="Enter your name"
              required
              autoFocus
            />
          </div>
        </fieldset>

          <fieldset className="auth-fieldset">
            <div>
              <input
                type="email"
                id="email"
                value={email}
                className="auth-form-input"
                onChange={(evt) => set(evt.target.value)}
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset className="auth-fieldset">
            <div>
              <button className="btn" type="submit">Sign in</button>
            </div>
          </fieldset>
        </form>
      </section>
      <section className="subHeader">
        <Link to="/signUp">Not a member yet? Click here to register</Link>
      </section>
    </main>
  )
}

