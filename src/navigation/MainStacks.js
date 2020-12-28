import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//components
import Add from '../screens/Add'
import BottomTab from './BottomTab'
//redux
import { useSelector, useDispatch } from 'react-redux'
import {fetchUser} from '../redux/actions/index'

const MainStack = createStackNavigator();
const MainStacks = () => {

  // const feed = useSelector(state => state.feed)
  const dispatch = useDispatch()

  //dispatch actions
  // const getFeed = () => dispatch(fetchFeed())
  const getCurrentUser = () => dispatch(fetchUser())

  useEffect(() => {
      // getFeed()
      getCurrentUser()
  }, []);

  //get user
  const user = useSelector(state => state.user)
  console.log("user is: ", user)

  return(

    <MainStack.Navigator initialRouteName="Bottom" >
      <MainStack.Screen
        name="Bottom"
        component={BottomTab}
      />
      <MainStack.Screen
        name="Add"
        component={Add}
      />
    </MainStack.Navigator>
  )
}

export default MainStacks