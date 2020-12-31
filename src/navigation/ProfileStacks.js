import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity, Text} from 'react-native'
import Profile from '../screens/Profile'
import {MaterialCommunityIcons, MaterialIcons} from 'react-native-vector-icons'
import Firebase from '../../config/FirebaseConfig'


const ProfileStacks = () => {
    const ProfileStack = createStackNavigator();
    return(
      <ProfileStack.Navigator>
        <ProfileStack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitle: () => <Text style={{fontSize: 24}}>Profile</Text> ,
            headerRight: () => (
                <TouchableOpacity onPress={() => {
                    Firebase.auth().signOut()
                }}> 
                    <MaterialCommunityIcons 
                        name="logout" 
                        size={32} 
                        color="black"
                        style={{ marginRight: 10 }}/>
                
                </TouchableOpacity> 
            ),
          }}
        />
      </ProfileStack.Navigator>
    )
}

export default ProfileStacks