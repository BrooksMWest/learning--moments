import { useEffect, useState } from "react"
import { getAllItems } from "../../services/itemsService"
import { useNavigate } from "react-router-dom"

export const ItemsList = () => {
    const [items, setItems] = useState([])
  
    const navigate = useNavigate()
  
    useEffect(() => {
      getAllItems().then((itemsArray) => {
        setItems(itemsArray)
      })
    }, [])
  
    return (
      <div className="item-container">
        {items.map((item) => {
          return (
            <div key={item.id} className="item-card">
                onClick={() => {
                  navigate(`/items/${item.id}`)
                }}
              <div className="item-name">{item.name}</div>
            </div>
          )
        })}
      </div>
    )
  }
  