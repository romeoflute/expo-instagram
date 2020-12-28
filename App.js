import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text} from 'react-native'
//navigator
import BottomTab from './src/navigation/BottomTab'
import MainStacks from './src/navigation/MainStacks'
//redux
import { Provider as StoreProvider } from 'react-redux'
import store from './src/redux/store'
import LandingStacks from './src/navigation/LandingStacks'
import Firebase from './config/FirebaseConfig'

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
          <MainStacks />
        </NavigationContainer>
      </StoreProvider>
  )
}

