import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//components
import Add from '../screens/Add'
import BottomTab from './BottomTab'
import Save from '../screens/Save'
//redux
import { useSelector, useDispatch } from 'react-redux'
import {fetchUser} from '../redux/actions/index'

const MainStack = createStackNavigator();
const MainStacks = () => {

  const dispatch = useDispatch() 
  const getCurrentUser = () => dispatch(fetchUser())

  useEffect(() => {
      getCurrentUser()
  }, []);

  return(

    <MainStack.Navigator initialRouteName="Bottom" screenOptions={{headerShown:false}} >
      <MainStack.Screen
        name="Bottom"
        component={BottomTab}
        options={{ title: '' }}
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
