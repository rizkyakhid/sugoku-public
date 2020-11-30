import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Board from "../components/board";
import { generateBoard } from "../store/actions/boardActions";

export function Game() {
  const board = useSelector((state) => state.board)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(generateBoard())
  }, [])

  console.log(board)

  return (
    <View>
      <Board board={board}></Board>
    </View>
  )
}