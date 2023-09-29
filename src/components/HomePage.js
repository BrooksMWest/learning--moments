import { useNavigate } from "react-router-dom"


export const HomePage = () => {
    const navigate = useNavigate()
    return (
       <>
       <h2>Welcome to The Loan Wolf, user, What would you like to see today?</h2>
        <div>
            <button className="btn"
            onClick={() => {
                navigate(`/myItems`)
            }}> 
                See items currently loaned out
            </button>
            <button className="btn"
            onClick={() => {
                navigate(`/addItems`)
            }}> 
               Create an item for someone to borrow
            </button>
        </div>
        </>
    )
}