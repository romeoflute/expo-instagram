import { USER_POSTS_STATE_CHANGE} from '../constants/index'

const initialState = {
    myPosts: []
}

export function myPosts(state = initialState, action) {

    switch(action.type){
        case USER_POSTS_STATE_CHANGE:
            return {
                ...state,
                myPosts: action.myPosts
            }
        default:
            return state
    }
}
