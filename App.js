import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//navigator
import BottomTab from './src/navigation/BottomTab'
//redux
import { Provider as StoreProvider } from 'react-redux'
import store from './src/redux/store'

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </StoreProvider>
  );
}

