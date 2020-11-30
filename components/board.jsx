import { View, Text, Button, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { autoSolve, generateBoard, validate } from '../store/actions/boardActions'

export default function Board(props) {
  const { board } = props
  const status = useSelector((state) => state.status)
  const dispatch = useDispatch()
  const [ inputBoard, setInputBoard ] = useState([])
  const [ inStatus, setInStatus ] = useState('') 

  useEffect(() => {
    setInputBoard(board)
  }, [board])

  useEffect(() => {
    setInStatus(status)
  }, [status])

  function handleSolve() {
    dispatch(autoSolve(inputBoard))
  }

  function handleNewGame() {
    dispatch(generateBoard())
  }

  function handleValidate() {
    dispatch(validate(inputBoard))
    console.log(inStatus)
    alert(inStatus)
  }

  return (
    <View>
      { board.map((boardRow, idRow) => (
        <View key={idRow} style={{ flexDirection: 'row', backgroundColor: '#fc3903' }}>
          {boardRow.map((boardCol, idCol) => (
            <View key={idCol} style={{ borderWidth: 1, padding: 4 }}>
              <TextInput keyboardType='numeric'>{boardCol}</TextInput>
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