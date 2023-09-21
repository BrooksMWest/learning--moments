export const getTypes = () => {
    return fetch(`http://localhost:8088/types`).then((res) => res.json())
}