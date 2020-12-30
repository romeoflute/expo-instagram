import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import FeedTopTabs from './FeedTopTabs'
import Explore from '../screens/Explore'
import Notifications from '../screens/Notifications'
import Profile from '../screens/Profile'

import {MaterialCommunityIcons, MaterialIcons} from 'react-native-vector-icons'
import Firebase from '../../config/FirebaseConfig';

const BottomTab = createMaterialBottomTabNavigator();
const EmptyScreen = () => {
    return (null)
}

const BottomTabs = () => {

    return (
        <BottomTab.Navigator
            activeColor="#000000"
            inactiveColor="#a9a9a9"
            barStyle={{ backgroundColor: '#d3d3d3' }}
            labeled={false}
        >
            <BottomTab.Screen 
            name="Feed" 
            component={FeedTopTabs}
            options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <BottomTab.Screen 
                name="Explore" 
                component={Explore} 
                options={{
                    tabBarLabel: 'Discover',
                    tabBarIcon: ({ color }) => (
                      <MaterialIcons name="search" color={color} size={26} />
                    ),
                  }}
            />
            <BottomTab.Screen 
                name="MainAdd" 
                component={EmptyScreen} 
                listeners={({ navigation }) => ({
                    tabPress: event => {
                      // Prevent default action
                      event.preventDefault();                
                      navigation.navigate('Add');
                    },
                  })}
                options={{
                    tabBarLabel: 'Add',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="camera-plus" color={color} size={26} />
                    ),
                  }}
            />
            <BottomTab.Screen 
                name="Notifications" 
                component={Notifications} 
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="heart" color={color} size={26} />
                    ),
                  }}
            />
            <BottomTab.Screen 
                name="Profile" 
                component={Profile} 
                listeners={({ navigation }) => ({
                  tabPress: event => {
                    event.preventDefault();
                    console.log("tab pressed with UID: ", Firebase.auth().currentUser.uid )
                    navigation.navigate('Profile', {userUid: Firebase.auth().currentUser.uid });
                  },
                })}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                      <MaterialIcons name="person" color={color} size={26} />
                    ),
                  }}
            />
        </BottomTab.Navigator>
    )
  }

  export default BottomTabs