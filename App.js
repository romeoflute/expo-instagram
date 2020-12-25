import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feed from './src/screens/Feed'
import Explore from './src/screens/Explore'
import Notifications from './src/screens/Notifications'
import Profile from './src/screens/Profile'
import Dm from './src/screens/Dm'
import Story from './src/screens/Story'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const FeedStack = createStackNavigator();
const DmStack = createStackNavigator();

const FeedStacks = () => {
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

const DMStacks = () => {
  return(
    <DmStack.Navigator>
      <DmStack.Screen
        name="Dm"
        component={Dm}
      />
    </DmStack.Navigator>
  )
}



const FeedTabs = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name="FeedStacks"
        component= {FeedStacks}
      /> 
      <TopTab.Screen
        name="DmStacks"
        component={DMStacks}
      />
    </TopTab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen 
          name="Feed" 
          component={FeedTabs}
        />
        <BottomTab.Screen name="Explore" component={Explore} />
        <BottomTab.Screen name="Notifications" component={Notifications} />
        <BottomTab.Screen name="Profile" component={Profile} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

