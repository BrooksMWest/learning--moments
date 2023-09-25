export const getAllNames = (name) => {
    return fetch(`http://localhost:8088/items/${name}`).then((res) => res.json())
}
