import { useEffect, useState } from "react"
import { postItem } from "../../services/itemsService"
import { useNavigate } from "react-router-dom"
import { getTypes } from "../../services/typesService"

export const NewItemForm = () => {
    const [itemNames, setItemNames] = useState([])
    const [itemDescriptions, setItemDescriptions] = useState([])
    const [borrowernames, setBorrowerNames] = useState([])
    const [borrowerEmail, setBorrowerEmail] = useState([])
    const [dateBorrowed, setDateBorrowed] = useState([])

    const TypeSelector = () => {
        const [selectedType, setSelectedType] = useState("")
    }
    
    const [newItem, setNewItem] = useState({
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

    useEffect(() => {
        getTypes().then((typesArray) => {
            setTypes(typesArray)
        })
    } )

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value)
}




const newLoanItem = {
    name: newItem.name,
    description: newItem.description,
    borrowerName: newItem.borrowerName,
    borrowerEmail: newItem.borrowerEmail,
    typeId: parseInt(newItem.typeId),
    dateBorrowed: newItem.dateBorrowed
}    

//postItem(newLoanItem).then(() => {
    //navigate("myItems")
//})

    return (
        <form className="create-item-form">
            <h2 className="create-item-form-title">Create and Loan an Item</h2>
            <fieldset>
                <div>
                    <label htmlFor="itemName">Item Name</label>
                    <input 
                    value={newItem.name}
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
                    value={newItem.description}
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
                    value={newItem.borrowerName}
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
                    value={newItem.borrowerEmail}
                    name
                    type="text"
                    className="form-control"
                    placeholder="Borrower Email"
                    //onChange={handleInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="itemType">Select Item Type</label>
                    <select
                        className="type-selector"
                        value={selectedType}
                        onChange={handleTypeChange}>
                            <option key={type.id} value={type.id}>
                                {type.name}
                            </option>

                    </select>
                </div>
            </fieldset>

        </form>
    )
}