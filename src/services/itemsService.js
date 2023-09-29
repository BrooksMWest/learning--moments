export const getAllItems = () => {
    return fetch(`http://localhost:8088/items?_expand=type`).then((res) => res.json())
}

export const postItem = (item) => {
    return fetch(`http://localhost:8088/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
  }
  
  export const getItemById = (id) => {
    return fetch(
      `http://localhost:8088/items/${id}`
    ).then((res) => res.json())
  }
  

  export const editItem = (item) => {
    return fetch(`http://localhost:8088/items/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
  }

  
  export const getItemsByTypeId = (typeId) => {
    return fetch(`http://localhost:8088/items?typeId=${typeId}`).then((res) =>
      res.json()
    )
  }
  //anytime i'm dealing with fetch requests, LOOK AT THE NETWORK TAB IN THE DEV TOOLS

  export const deleteItem = (item) => {
    return fetch(`http://localhost:8088/items/${item.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
  }