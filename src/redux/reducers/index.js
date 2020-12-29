import { combineReducers } from 'redux'
import {user} from './user'
import {myPosts} from './myPosts'
const AllReducers = combineReducers({
    user,
    myPosts
})
export default AllReducers

