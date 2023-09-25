export const HomePage = () => {
    return (
       <>
       <h2>Welcome to The Loan Wolf, user, What would you like to see today?</h2>
        <div>
            <button className="btn"> 
                See items currently loaned out
            </button>
            <button className="btn"> 
               Create an item for someone to borrow
            </button>
        </div>
        </>
    )
}