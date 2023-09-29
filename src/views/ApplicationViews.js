import { useState, useEffect } from "react"
import { UserViews } from "./UserViews"
import { NonUserViews } from "./NonUserViews"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

useEffect(() => {
  const localLearningUser = localStorage.getItem("learning_user")
  const learningUserObject = JSON.parse(localLearningUser)

  setCurrentUser(learningUserObject)
}, [])

    return currentUser.isStaff ? (
        <UserViews currentUser={currentUser} />
    ) : (
        <NonUserViews currentUser={currentUser}/>

    )

}