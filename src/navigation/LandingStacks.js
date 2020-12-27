import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../components/auth/Landing'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'

const LandingStacks = () => {
  const LandingStack = createStackNavigator();

  return(
    <LandingStack.Navigator initialRouteName="Login" >
      <LandingStack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <LandingStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: true}}
      />
      <LandingStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: true}}
      />
    </LandingStack.Navigator>
  )
}

export default LandingStacks