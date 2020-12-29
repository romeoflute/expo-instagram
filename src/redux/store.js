import { applyMiddleware, createStore } from 'redux'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import AllReducers from './reducers/index'

let middleWare = applyMiddleware(thunk, logger)
 
const store = createStore(AllReducers, middleWare)
 
export default store