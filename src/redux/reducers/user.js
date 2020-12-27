const initialState = {
    currentUser: null
}

export function user(state = initialState, action) {
    return {
        ...state,
        currentUser: action.currentUser
    }
}

// const user = (state = initialState, action) => {
//     return {
//         ...state,
//         currentUser: action.currentUser
//     }
// }


