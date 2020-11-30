import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { autoSolve, generateBoard, validate } from '../store/actions/boardActions'

export default function Board(props) {
  const { board } = props
  const status = useSelector((state) => state.status)
  const dispatch = useDispatch()
  const [ inputBoard, setInputBoard ] = useState([])

  useEffect(() => {
    setInputBoard(board)
  }, [board, status])

  function handleSolve() {
    // console.log(board, "IN BOARDNYA")
    dispatch(autoSolve(inputBoard))
  }

  function handleNewGame() {
    dispatch(generateBoard())
  }

  function handleValidate() {
    dispatch(validate(inputBoard))
    console.log(status)
    // alert(status)
  }

  return (
    <View>
      { board.map((boardRow, idRow) => (
        <View key={idRow} style={{ flexDirection: 'row', backgroundColor: '#fc3903' }}>
          {boardRow.map((boardCol, idCol) => (
            <View key={idCol} style={{ borderWidth: 1, padding: 4 }}>
              <Text>{boardCol}</Text>
            </View>
          ))}
        </View>
      ))}
      <Button onPress={handleValidate} title='Validate'></Button>
      <Button onPress={handleSolve} title='Solve'></Button>
      <Button onPress={handleNewGame} title='New Game'></Button>
    </View>
  )
}