import { useEffect, useState } from "react"
import { editItem } from "../../services/itemsService"
import { useParams, useNavigate } from "react-router-dom"
import { getTypes } from "../../services/typesService"

export const EditItemForm = () => {
    const [editedItem, setEditedItem] = useState({
        id: 0,
        userId: 0,
        name: "",
        typeId: 0,
        description: "",
        borrowerName: "",
        borrowerEmail: "",
        dateBorrowed: ""
    })

const navigate = useNavigate()



const updatedItem = {
    name: editedItem.name,
    description: editedItem.description,
    borrowerName: editedItem.borrowerName,
    borrowerEmail: editedItem.borrowerEmail,
    typeId: parseInt(editedItem.typeId),
    dateBorrowed: editedItem.dateBorrowed
}    

//editItem(updatedItem).then(() => {
    //navigate(`/myItems`)
//})

    return (
        <form className="create-item-form">
            <h2 className="create-item-form-title">Edit One of Your Items</h2>
            <fieldset>
                <div>
                    <label htmlFor="itemName">Item Name</label>
                    <input 
                    value={editedItem.name}
                    name
                    type="text"
                    className="form-control"
                    placeholder="item name"
                    //onChange={handleInputChange}
                    />
                </div>
            </fieldset>
        
            <fieldset>
                <div>
                    <label htmlFor="itemName">Item Description</label>
                    <input 
                    value={editedItem.description}
                    name
                    type="text"
                    className="form-control"
                    placeholder="item description"
                    //onChange={handleInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="itemName">Borrower Name</label>
                    <input 
                    value={editedItem.borrowerName}
                    name
                    type="text"
                    className="form-control"
                    placeholder="Who is borrowing your item?"
                    //onChange={handleInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="itemName">Borrower Email</label>
                    <input 
                    value={editedItem.borrowerEmail}
                    name
                    type="text"
                    className="form-control"
                    placeholder="Borrower Email"
                    //onChange={handleInputChange}
                    />
                </div>
            </fieldset>
        </form>
    )
}