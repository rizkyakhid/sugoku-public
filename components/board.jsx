import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { autoSolve, generateBoard, validate } from '../store/actions/boardActions'

export default function Board(props) {
  const { board } = props
  const status = useSelector((state) => state.status)
  const dispatch = useDispatch()

  function handleSolve() {
    // console.log(board, "IN BOARDNYA")
    dispatch(autoSolve())
  }

  function handleNewGame() {
    dispatch(generateBoard())
  }

  function handleValidate() {
    console.log('INI VALIDATE')
    dispatch(validate())
    console.log(status)
    alert(status)
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