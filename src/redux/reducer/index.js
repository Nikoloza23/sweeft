
const initialState = {
    lastUser: []
}


export const reducer = (state = initialState,
    Action) => {
    const { payload, type } = Action;
    switch (type) {
        case "GET__LAST__USER": {
            const newArray = [...state.lastUser, payload]
            return {
                ...state,
                lastUser: newArray
            };
        }

        default: return state;
    }
}