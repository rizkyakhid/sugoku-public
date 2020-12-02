import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Board from "../components/board";
import { generateBoard, validate } from "../store/actions/boardActions";

export default function Game({ route, navigation }) {
  const board = useSelector((state) => state.board)
  const dispatch = useDispatch()
  const { difficulty, playerName } = route.params

  useEffect(() => {
    dispatch(generateBoard(difficulty))
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: "center", backgroundColor: '#f0f0f0' }}>
      <View style={{ marginLeft: 10, marginBottom: 5 }}>
        <Text style={{ fontSize: 16 }}>Name: {playerName}</Text>
        <Text style={{ fontSize: 16 }}>Difficulty: {difficulty}</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Board board={board} navigation={navigation}></Board>
      </View>
    </View>
  )
}