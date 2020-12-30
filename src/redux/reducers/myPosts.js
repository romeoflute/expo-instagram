import { USER_POSTS_STATE_CHANGE} from '../constants/index'

const initialState = []

export function myPosts(state = initialState, action) {

    switch(action.type){
        case USER_POSTS_STATE_CHANGE:
            return (
                [...action.myPosts]
            )
        default:
            return state
    }
}
