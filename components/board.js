import { View, Text, Button, TextInput, Alert, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { autoSolve, validate } from '../store/actions/boardActions'

export default function Board(props) {
  const { board, navigation } = props
  const status = useSelector((state) => state.status)
  const dispatch = useDispatch()
  const [inputBoard, setInputBoard] = useState([])
  const [inputStatus, setInputStatus] = useState('')
  const windowWidth = useWindowDimensions().width;

  useEffect(() => {
    setInputBoard(board)
    dispatch(validate(board))
  }, [board])

  useEffect(() => {
    setInputStatus(status)
  }, [status])

  function handleSolve() {
    dispatch(autoSolve(board))
  }

  function handleValidate() {
    if (inputStatus === 'solved') {
      Alert.alert(
        `SOLVED`, 
        `Your board is solved!`,
        [
          {
            text: 'Yippy!',
            onPress: () => navigation.navigate('Finish')
          }
        ]
      )
      setTimeout(() => {
        navigation.navigate('Finish')
      }, 2000);
    } else {
      Alert.alert(
        `UNSOLVED`, 
        `Your board is unsolved! Come on let's finish it!`,
        [
          {
            text: 'Ah OK then!'
          }
        ]
      )
    }
  }

  function handleChange(i, j, val) {
    const newData = JSON.parse(JSON.stringify(inputBoard))
    newData[i][j] = val
    setInputBoard(newData)
  }

  return (
    <View style={{ width: (windowWidth - 20), justifyContent: "center" }}>
      { inputBoard.map((boardRow, idRow) => (
        <View key={idRow} style={{ flexDirection: 'row' }}>
          {boardRow.map((boardCol, idCol) => (
            <TextInput
              key={idCol}
              onChangeText={(value) => handleChange(idRow, idCol, value)}
              style={{
                textAlign: 'center',
                color: '#000000',
                borderWidth: 1,
                borderTopWidth: idRow % 3 === 0 ? 3 : 1,
                borderBottomWidth: idRow === 8 ? 3 : 1,
                borderLeftWidth: idCol % 3 === 0 ? 3 : 1,
                borderRightWidth: idCol === 8 ? 3 : 1,
                width: (windowWidth - 20) / 9,
                height: (windowWidth - 20) / 9,
                textAlign: 'center',
                justifyContent: "center",
                backgroundColor: board[idRow][idCol] !== 0 ? 'yellow' : '#f0f0f0',
                fontSize: 24,

              }}
              keyboardType='numeric'
              value={boardCol !== 0 ? String(boardCol) : ''}
              editable={board[idRow][idCol] !== 0 ? false : true}
              maxLength={1}
            />
          ))}
        </View>
      ))}
      <View style={{ marginTop: 5 }}>
        <Button onPress={handleValidate} color='grey' title='Validate'></Button>
        <Button onPress={handleSolve} color='red' title='Solve'></Button>
      </View>
    </View>
  )
}