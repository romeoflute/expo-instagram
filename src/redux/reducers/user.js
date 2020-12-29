import { USER_STATE_CHANGE} from '../constants/index'

const initialState = {
    currentUser: null
}

export function user(state = initialState, action) {

    switch(action.type){
        case USER_STATE_CHANGE:
            return {
                ...state,
                ...action.currentUser
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


