import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dm from '../screens/Dm'

const DmStacks = () => {

  const DmStack = createStackNavigator();

  return(

    <DmStack.Navigator>
      <DmStack.Screen
        name="Dm"
        component={Dm}
      />
    </DmStack.Navigator>
  )
}

export default DmStacks