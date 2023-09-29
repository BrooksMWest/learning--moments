import { useEffect, useState } from "react"
import { postItem } from "../../services/itemsService"
import { useNavigate } from "react-router-dom"

import { getTypes } from "../../services/typesService"

export const NewItemForm = () => {
    const [dateBorrowed, setDateBorrowed] = useState("")
    const [selectedType, setSelectedType] = useState("")
    const [types, setTypes] = useState ([])
    const [newItem, setNewItem] = useState({
        id: 0,
        userId: 0,
        name: "",
        typeId: 0,
        description: "",
        borrowerName: "",
        borrowerEmail: "",
        dateBorrowed: "",
        ownerId: 0
    })

    const navigate = useNavigate()

    useEffect(() => {
        getTypes().then((typesArray) => {
            setTypes(typesArray)
        })
    }, [])
//handleInputChange is used for all of my inputs!!
    const handleInputChange = (event) => {
        console.log(event)
        const { name, value } = event.target // {what i'm taking out of the target} = where the event is happening
        setNewItem({...newItem, //... is the spread operator that puts stuff in new object
        [name]: value,  // [name] whatever field i'm typing into  value is whatever i'm typing
    })
}

const handleSelectChange = (event) => {
    setSelectedType(event.target.value)
    setNewItem({ ...newItem, typeId: event.target.value })
}

const handleDateChange = (event) => {
    setDateBorrowed(event.target.value)
}

const handleSave = (event) => {
    event.preventDefault()

//const formattedDate = new Date(dateBorrowed).toISOString().split("T")[0]
//toISOString method that returns a string representing date time string format
// .split("T")(0)

    const newLoanItem = {
        name: newItem.name,
        description: newItem.description,
        borrowerName: newItem.borrowerName,
        borrowerEmail: newItem.borrowerEmail,
        typeId:parseInt(newItem.typeId),
        dateBorrowed: dateBorrowed,
        ownerId: parseInt(newItem.ownerId)
    }    
    
    postItem(newLoanItem)
    .then(() => {
        navigate("/myItems")
    })
    }
    
    


    return (
        <form className="create-item-form">
            <h2 className="create-item-form-title">Create and Loan an Item</h2>
            <fieldset>
                <div>
                    <label htmlFor="name">Item Name</label>
                    <input 
                    value={newItem.name}
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="item name"
                    onChange={handleInputChange}
                    />
                </div>
            </fieldset>
        
            <fieldset>
                <div>
                    <label htmlFor="itemDescription">Item Description</label>
                    <input 
                    value={newItem.description}
                    name="description"
                    type="text"
                    className="form-control"
                    placeholder="item description"
                    onChange={handleInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="borrowerName">Borrower Name</label>
                    <input 
                    value={newItem.borrowerName}
                    name="borrowerName"
                    type="text"
                    className="form-control"
                    placeholder="Who is borrowing your item?"
                    onChange={handleInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="borrowerEmail">Borrower Email</label>
                    <input 
                    value={newItem.borrowerEmail}
                    name="borrowerEmail"
                    type="text"
                    className="form-control"
                    placeholder="Borrower Email"
                    onChange={handleInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="type">Select Item Type</label>
                    <select
                        className="type-selector"
                        onChange={handleSelectChange}
                        value={selectedType}
                        name="type"
                        >
                            <option value="">-- Select Item Type --</option>
                            {types.map((typeObj) => {
                                return (
                            <option key={types.id} value={typeObj.id}>
                                {typeObj.name}
                            </option>
                                )
                          }) }
                    </select>
                    </div>
            </fieldset>

            <fieldset> 
              
            <label htmlFor="dateBorrowed">Date Borrowed</label>      
            <input type="date"
                    className="date"
                    onChange={handleDateChange}
                    value={dateBorrowed}
                    name="dateBorrowed"
            />
            
         </fieldset>
            <div>    
            <button className="btn" onClick={handleSave}>
                Loan out Item
            </button>
            </div>
        </form>
    )
    }
