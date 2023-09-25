import { useEffect, useState } from "react"
import { getItemById } from "../../services/itemsService" 
import { useParams, useNavigate } from "react-router-dom"
import { getTypes } from "../../services/typesService"

export const EditItem = () => {
    const [item, setItems] = useState({})
    const [type, setTypes] = useState({})

    const { itemId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getTypes().then((typesArray) => {
            setTypes(typesArray)
        })
    }, [])
    

        useEffect(() => {
            getItemById(itemId).then((itemObj) => {
                setItems(itemObj)
            })
        }, [itemId])

        const handleSave = (event) => {
            event.preventDefault()

            const updatedItem = {
                name: item.name,
                description: item.description,
                borrowerName: item.borrowerName,
                borrowerEmail: item.borrowerEmail,
                typeId: parseInt(item.typeId),
                dateBorrowed: parseInt(item.dateBorrowed),
            }
            editItem(updatedItem).then(() => {
                navigate(`/myItems`)
            })
        }
        
        return ( 
            <form className="create-item-form">
            <h2 className="create-item-form-title">Create and Loan an Item</h2>
            <fieldset>
                <div>
                    <label htmlFor="name">Item Name</label>
                    <input 
                    value={item.name}
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
