import { 
    USER_STATE_CHANGE, 
    USER_POSTS_STATE_CHANGE,  
    USER_FOLLOWING_STATE_CHANGE,
    USER_TIMELINE_STATE_CHANGE
} from '../constants/index'

const initialState = {
    currentUser: null,
    posts: [],
    following: [], 
    timeline:[]
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
            return {
                ...state,
                following: action.following
            }
        case USER_TIMELINE_STATE_CHANGE:
            console.log("inside USER_TIMELINE_STATE_CHANGE ", action.timeline)

            return {
                ...state,
                timeline: action.timeline
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


