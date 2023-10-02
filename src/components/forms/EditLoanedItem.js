import { useEffect, useState } from "react"
import { getItemById, editItem, deleteItem } from "../../services/itemsService" 
import { useParams, useNavigate } from "react-router-dom"
import { getTypes } from "../../services/typesService"
import "./Form.css"


export const EditLoanedItemForm = () => {
    const [item, setItems] = useState({})
    const [types, setTypes] = useState([])

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
                id: parseInt(item.id),
                dateBorrowed: item.dateBorrowed,
                ownerId: parseInt(item.ownerId)
            }
            editItem(updatedItem).then(() => {
                navigate(`/myItems`)
            })
        }
       
        return ( 
            <div>
            <form className="create-item-form">
                <h2 className="create-item-form-title">Edit Your Item</h2>
                <fieldset>
                    <div>
                        <label htmlFor="name">Item Name</label>
                        <input
                            value={item.name ? item.name : ""}
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="item name"
                            onChange={(event) => {
                                const itemCopy = { ...item }
                                itemCopy.name = event.target.value
                                setItems(itemCopy)
                            } } />
                    </div>
                </fieldset>

                <fieldset>
                    <div>
                        <label htmlFor="itemDescription">Item Description</label>
                        <input
                            value={item.description ? item.description : ""}
                            name="description"
                            type="text"
                            className="form-control"
                            placeholder="item description"
                            onChange={(event) => {
                                const itemCopy = { ...item }
                                itemCopy.description = event.target.value
                                setItems(itemCopy)
                            } } />
                    </div>
                </fieldset>

                <fieldset>
                    <div>
                        <label htmlFor="borrowerName">Borrower Name</label>
                        <input
                            value={item.borrowerName ? item.borrowerName : ""}
                            name="borrowerName"
                            type="text"
                            className="form-control"
                            placeholder="Who is borrowing your item?"
                            onChange={(event) => {
                                const itemCopy = { ...item }
                                itemCopy.borrowerName = event.target.value
                                setItems(itemCopy)
                            } } />
                    </div>
                </fieldset>

                <fieldset>
                    <div>
                        <label htmlFor="borrowerEmail">Borrower Email</label>
                        <input
                            value={item.borrowerEmail ? item.borrowerEmail : ""}
                            name="borrowerEmail"
                            type="text"
                            className="form-control"
                            placeholder="Borrower Email"
                            onChange={(event) => {
                                const itemCopy = { ...item }
                                itemCopy.borrowerEmail = event.target.value
                                setItems(itemCopy)
                            } } />
                    </div>
                </fieldset>

                <fieldset>
                    <div>
                        <label htmlFor="type">Select Item Type</label>
                        <select
                            className="type-selector"
                            value={item.selectedType ? item.selectedType : ""}
                            name="type"
                            onChange={(event) => {
                                const itemCopy = { ...item }
                                itemCopy.typeId = event.target.value
                                setItems(itemCopy)
                            }}
                                    >
                                    <option value="">-- Select Item Type --</option>
                                {types.map((typeObj) => {
                                        return (
                                            <option key={typeObj.id} value={typeObj.id}>
                                                {typeObj.name}
                                            </option>
                                        )
                                    })}
                    </select>
                </div>
            </fieldset><fieldset>

                    <label htmlFor="dateBorrowed">Date Borrowed</label>
                    <input type="date"
                        className="date"
                        value={item.dateBorrowed ? item.dateBorrowed : ""}
                        name="dateBorrowed" 
                        onChange={(event) => {
                            const itemCopy = { ...item }
                            itemCopy.dateBorrowed = event.target.value
                            setItems(itemCopy)
                        }}
                    />
                </fieldset><div>
                    <button className="btn" onClick={handleSave}>
                        Save Edited Item
                    </button>
                </div>
        </form>
        </div>
        )
    }