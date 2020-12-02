import React from "react";
import { Button, Text, View } from "react-native";

export default function Finish({ navigation }) {
  function handleBackHome() {
    navigation.navigate('Home')
  }

  return (
    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <Text>You finished the game! Well done!</Text>
      <Button title='Back to Home' onPress={handleBackHome}/>
    </View>
  )
}