import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';

export default function Home({ navigation }) {
  const [playerName, setPlayerName] = useState('')
  const windowWidth = useWindowDimensions().width;
  console.log(windowWidth)

  function handleNameChange(val) {
    setPlayerName(val)
  }

  console.log(playerName)

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ width: windowWidth-40,  margin: 10 }}>
        <Text style={{ fontSize: 20, textAlign: 'justify' }}>Welcome to the game! Please insert your nickname:</Text>
      </View>
      <TextInput onChangeText={(value) => handleNameChange(value)} style={{ borderWidth: 1, width: windowWidth-40, height: 40, fontSize: 24, padding: 5 }} />
      <View style={{ flexDirection: "row", margin: 10, width: windowWidth-40, justifyContent: "center" }}>
        <Button color="#f00" title='Easy' onPress={() => { navigation.navigate('Game', { difficulty: 'easy', playerName: playerName }) }} />
        <Button color="#f00" title='Medium' onPress={() => { navigation.navigate('Game', { difficulty: 'medium', playerName: playerName }) }} />
        <Button color="#f00" title='Hard' onPress={() => { navigation.navigate('Game', { difficulty: 'hard', playerName: playerName }) }} />
      </View>
    </View>
  )
}