import React from 'react'
import { Button, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home({ navigation }) {
  return (
    <>
      <Text>INI HALAMAN HOME</Text>
      <Button title='To Game' onPress={() => {navigation.navigate('Game')}} />
    </>
  )
}