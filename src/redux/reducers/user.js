import { USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE, USER_FOLLOWING_STATE_CHANGE} from '../constants/index'

const initialState = {
    currentUser: null,
    posts: [],
    following: []
}

export function user(state = initialState, action) {

    switch(action.type){
        case USER_STATE_CHANGE:
            return {
                ...state,
                currentUser: action.currentUser
            }
        case USER_POSTS_STATE_CHANGE:
            return {
                ...state,
                posts: action.myPosts
            }
        case USER_FOLLOWING_STATE_CHANGE:
            console.log("USER_POSTS_STATE_CHANGE : ", action.following)
            return {
                ...state,
                following: action.following
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


