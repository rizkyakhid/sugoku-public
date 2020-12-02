import React from "react";
import { Button, Text, View } from "react-native";

export default function Finish({ navigation }) {
  function handleBackHome() {
    navigation.navigate('Home')
  }

  return (
    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text>You finished the game! Well done!</Text>
      </View>
      <View style={{ margin: 5 }}>
        <Button title='Play Again!!' onPress={handleBackHome} />
      </View>
    </View>
  )
}