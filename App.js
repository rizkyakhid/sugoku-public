import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from "./store";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Game from './screens/Game';
import Home from './screens/Home';
import Finish from './screens/Finish';

const Stack = createStackNavigator()


export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SudorKu" component={Game} />
          <Stack.Screen name="Finish" component={Finish} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcba03',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
