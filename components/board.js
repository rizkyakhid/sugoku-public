import { View, Text, Button, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { autoSolve, validate } from '../store/actions/boardActions'

export default function Board(props) {
  const { board } = props
  const status = useSelector((state) => state.status)
  const dispatch = useDispatch()
  const [inputBoard, setInputBoard] = useState([])
  const [inputStatus, setInputStatus] = useState('')

  useEffect(() => {
    setInputBoard(board)
  }, [board])

  useEffect(() => {
    setInputStatus(status)
  }, [status, inputStatus])

  function handleSolve() {
    dispatch(autoSolve(board))
  }

  function handleValidate() {
    dispatch(validate(board))
    console.log(inputStatus)
  }

  function handleChange(i, j, val) {
    const newData = JSON.parse(JSON.stringify(inputBoard))
    newData[i][j] = val
    setInputBoard(newData)
  }

  return (
    <View>
      { inputBoard.map((boardRow, idRow) => (
        <View key={idRow} style={{ flexDirection: 'row', backgroundColor: '#fc3903' }}>
          {boardRow.map((boardCol, idCol) => (
            <TextInput
              key={idCol}
              onChangeText={(value) => handleChange(idRow, idCol, value)}
              style={{ 
                textAlign: 'center', 
                color: '#000000', borderWidth: 1, 
                width: 40, 
                height: 40, 
                textAlign: 'center', 
                justifyContent: "center", 
                backgroundColor: board[idRow][idCol] !== 0 ? '#fc3903' : '#f0f0f0', 
                fontSize: 18 
              }}
              keyboardType='numeric'
              value={boardCol !== 0 ? String(boardCol) : ''}
              editable={board[idRow][idCol] !== 0 ? false : true}
              maxLength={1}
            />
          ))}
        </View>
      ))}
      <Button onPress={handleValidate} color='grey' title='Validate'></Button>
      <Button onPress={handleSolve} color='red' title='Solve'></Button>
    </View>
  )
}