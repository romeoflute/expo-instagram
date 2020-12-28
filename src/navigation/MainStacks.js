import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//components
import Add from '../screens/Add'
import BottomTab from './BottomTab'
import Save from '../screens/Save'
//redux
import { useSelector, useDispatch } from 'react-redux'
import {fetchUser} from '../redux/actions/index'
// import { database } from 'firebase';

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

  //get user from Redux
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
      <MainStack.Screen
        name="Save"
        component={Save}
      />
    </MainStack.Navigator>
  )
}

export default MainStacks
