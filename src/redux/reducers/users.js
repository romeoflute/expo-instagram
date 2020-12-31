import { 
    USERS_DATA_STATE_CHANGE, 
} from '../constants/index'

const initialState = {
    users: [],
}

export function users(state = initialState, action) {

    switch(action.type){
        case USERS_DATA_STATE_CHANGE:
            return {
                ...state,
                users: [...state.users, ...action.user]
            }
        default:
            return state
    }
}

// const user = (state = initialState, action) => {
//     return {
//         ...state,
//         currentUser: action.currentUser
//     }
// }


