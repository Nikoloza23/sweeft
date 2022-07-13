export const getLastUser = (id, name, prefix, lastName) => {
    return {
        type: "GET__LAST__USER",
        payload: { id, name, prefix, lastName }
    }
}