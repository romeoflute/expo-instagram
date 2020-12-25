import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FeedStacks from './FeedStacks'
import DmStacks from './DmStacks'

const FeedTopTabs = () => {

    const TopTab = createMaterialTopTabNavigator();

    return (
      <TopTab.Navigator>
        <TopTab.Screen
          name="FeedStacks"
          component= {FeedStacks}
        /> 
        <TopTab.Screen
          name="DmStacks"
          component={DmStacks}
        />
      </TopTab.Navigator>
    )
  }

  export default FeedTopTabs