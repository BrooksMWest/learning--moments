import { useEffect, useState } from "react"
import { getAllItems, deleteItem } from "../../services/itemsService"
import { useNavigate } from "react-router-dom"
import "./Items.css"

export const ItemsList = ({ currentUser }) => {
    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const navigate = useNavigate()
    

    


    useEffect(() => {
      if (currentUser) {
        getAllItems().then((itemsArray) => {
          const userItems = itemsArray.filter(
            (item) => item.ownerId === currentUser.id)
            setFilteredItems(userItems)
          })
        } else {
          setFilteredItems([])
        }
      }, [currentUser])
        
        
         
  //runs when items change 
const handleDelete = (item) => {
   deleteItem(item).then(() => {
    getAllItems().then((itemsArray) => {
    setFilteredItems(itemsArray.filter((item) => item.ownerId === currentUser.id))
  })
   })
}

    return (
      <div className="item-container">
        {filteredItems.map((item) => {
          return (
           
           <div  key={item.id} className="item-card"> 
            <div className="item">
      
              <div className="item-name">Item Loaned Out: {item.name}</div>
              <div className="item">Item Description: {item.description}</div>
              <div className="item">Borrower Name: {item.borrowerName}</div>
              <div className="item">Borrower Email: {item.borrowerEmail}</div>
              <div className="item">Type of Item: {item.type.name}</div>
              <div className="item">Date Borrowed: {item.dateBorrowed}</div>
              <button className="edit-btn" onClick={() => navigate(`/editItems/${item.id}`)}>Edit Item</button>
               <button className="delete-btn" onClick={() => handleDelete(item)}>Delete Item</button>
           
            </div>
            </div>
          )
        })}
      </div>
    )
  }
  