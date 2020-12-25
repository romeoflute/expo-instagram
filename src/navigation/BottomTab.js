import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import FeedTopTabs from './FeedTopTabs'
import Explore from '../screens/Explore'
import Notifications from '../screens/Notifications'
import Profile from '../screens/Profile'

const BottomTabs = () => {

    const BottomTab = createMaterialBottomTabNavigator();

    return (
        <BottomTab.Navigator>
            <BottomTab.Screen 
            name="Feed" 
            component={FeedTopTabs}
            />
            <BottomTab.Screen name="Explore" component={Explore} />
            <BottomTab.Screen name="Notifications" component={Notifications} />
            <BottomTab.Screen name="Profile" component={Profile} />
        </BottomTab.Navigator>
    )
  }

  export default BottomTabs