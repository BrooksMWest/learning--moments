import { useEffect, useState } from "react"
import { getAllItems, deleteItem } from "../../services/itemsService"
import { useNavigate } from "react-router-dom"

export const ItemsList = ({ currentUser }) => {
    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const navigate = useNavigate()
  
    useEffect(() => {
      getAllItems().then((itemsArray) => {
        if (currentUser) {
        
          setFilteredItems(itemsArray)
        } else {
          const userItems = itemsArray.filter(
            (item) => item.userId === currentUser.id
          )
          setItems(userItems)
        }
      })
    }, [currentUser])
  //runs when items change 
const handleDelete = (item) => {
   deleteItem(item).then( getAllItems().then((itemsArray) => {
    setItems(itemsArray)
  }))

}

    return (
      <div className="item-container">
        {filteredItems.map((item) => {
          return (
            <div key={item.id} className="item-card"> 
              <div className="item-name">{item.name}</div>
              <div>{item.description}</div>
              <div>{item.borrowerName}</div>
              <div>{item.borrowerEmail}</div>
              <div>{item.type.name}</div>
              <div>{item.dateBorrowed}</div>
              <button className="btn" onClick={() => navigate(`/editItems/${item.id}`)}>Edit Item</button>
               <button className="btn" onClick={() => handleDelete(item)}>Delete Item</button>
            </div>
          )
        })}
      </div>
    )
  }
  