import React, { useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { generateBoard } from "../store/actions/boardActions";

export function Game() {
  const board = useSelector((state) => state.board)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(generateBoard())
  }, [])

  console.log(board)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      { board.map((boardRow, idRow) => (
        <View key={idRow} style={{ flexDirection: 'row' }}>
          {boardRow.map((boardCol, idCol) => (
            <View key={idCol} style={{ borderWidth: 1, padding: 4 }}>
              <Text>{boardCol}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  )
}