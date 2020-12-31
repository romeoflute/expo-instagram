import { combineReducers } from 'redux'
import {user} from './user'
import {users} from './users'

const AllReducers = combineReducers({
    user,
    usersState: users
})
export default AllReducers

