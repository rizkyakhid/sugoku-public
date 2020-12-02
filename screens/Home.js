import React, { useState } from 'react'
import { Alert, Button, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';

export default function Home({ navigation }) {
  const [playerName, setPlayerName] = useState('')
  const windowWidth = useWindowDimensions().width;

  function handleNameChange(val) {
    setPlayerName(val)
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ width: windowWidth - 40, margin: 10 }}>
        <Text style={{ fontSize: 24, textAlign: 'justify' }}>Welcome to the game! Please insert your nickname:</Text>
      </View>
      <TextInput onChangeText={(value) => handleNameChange(value)} style={{ borderBottomWidth: 1, width: windowWidth - 40, height: 40, fontSize: 24, padding: 5 }} />
      <View style={{ flexDirection: "row", margin: 10, width: windowWidth - 40, justifyContent: "center" }}>
        <View style={{ marginRight: 1, width: (windowWidth-40)/3 }}>
          <Button color="green" title='Easy' onPress={() => { playerName !== '' ? navigation.navigate('SudorKu', { difficulty: 'easy', playerName: playerName }) : Alert.alert('Unable To Start', 'You have to input your nickname first!') }} />
        </View>
        <View style={{ marginHorizontal: 1,  width: (windowWidth-40)/3 }}>
          <Button color="orange" title='Medium' onPress={() => { playerName !== '' ? navigation.navigate('SudorKu', { difficulty: 'medium', playerName: playerName }) : Alert.alert('Unable To Start', 'You have to input your nickname first!') }} />
        </View>
        <View style={{ marginLeft: 1, width: (windowWidth-40)/3 }}>
          <Button color="red" title='Hard' onPress={() => { playerName !== '' ? navigation.navigate('SudorKu', { difficulty: 'hard', playerName: playerName }) : Alert.alert('Unable To Start', 'You have to input your nickname first!') }} />
        </View>
      </View>
    </View>
  )
}