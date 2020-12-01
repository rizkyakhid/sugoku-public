import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Board from "../components/board";
import { generateBoard } from "../store/actions/boardActions";

export default function Game({ route }) {
  const board = useSelector((state) => state.board)
  const dispatch = useDispatch()
  const { difficulty, playerName } = route.params

  useEffect(() => {
    dispatch(generateBoard(difficulty))
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#f0f0f0' }}>
      <View>
        <Text>{playerName}</Text>
      </View>
      <View>
        <Board board={board}></Board>
      </View>
    </View>
  )
}