import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../screens/Feed'
import Story from '../screens/Story'
import CommentList from '../screens/CommentList'

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
        <FeedStack.Screen
          name="CommentList"
          component={CommentList}
        />
      </FeedStack.Navigator>
    )
}

export default FeedStacks