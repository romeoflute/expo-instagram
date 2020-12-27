import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text} from 'react-native'
//navigator
import BottomTab from './src/navigation/BottomTab'
//redux
import { Provider as StoreProvider } from 'react-redux'
import store from './src/redux/store'
import { createStackNavigator } from '@react-navigation/stack';
import LandingStacks from './src/navigation/LandingStacks'
import Firebase from './config/FirebaseConfig'

const Stack = createStackNavigator()
export default function App() {

  const [loaded, setLoaded] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
      Firebase.auth().onAuthStateChanged((authUser)=> {
        if(!authUser){
          setLoggedIn(false)
          setLoaded(true)
        }else{
          setLoggedIn(true)
          setLoaded(true)
        }
      })
  }, []);

  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        {/* <BottomTab /> */}
        <LandingStacks />
      </NavigationContainer>
    </StoreProvider>
  );
  

  if (!loaded){
    return(
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>Loading...</Text>
      </View>
    )
  }
  if (!loggedIn){
    return (
      <StoreProvider store={store}>
        <NavigationContainer>
          {/* <BottomTab /> */}
          <LandingStacks />
        </NavigationContainer>
      </StoreProvider>
    );
  }
  return(
    <StoreProvider store={store}>
        <NavigationContainer>
          <BottomTab />
        </NavigationContainer>
      </StoreProvider>
  )
}

