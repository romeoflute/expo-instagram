import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../screens/Feed'
import Story from '../screens/Story'

const FeedStacks = () => {

    const FeedStack = createStackNavigator();

    return(
      <FeedStack.Navigator>
        <FeedStack.Screen
          name="Feed"
          component={Feed}
        />
        <FeedStack.Screen
          name="Story"
          component={Story}
        />
      </FeedStack.Navigator>
    )
}

export default FeedStacks