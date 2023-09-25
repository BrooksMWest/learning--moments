export const getTypes = () => {
    return fetch(`http://localhost:8088/types`).then((res) => res.json())
}

export const getTypesById = (typeId) => {
    return (fetch`http://localhost:8088/type`)
}