const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')

const encodeParams = (params) =>
  Object.keys(params)
    .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
    .join('&');

export function generateBoard(difficulty) {
  return (dispatch) => {
    fetch('https://sugoku.herokuapp.com/board?difficulty='+difficulty)
      .then(res => res.json())
      .then(({ board }) => {
        dispatch({ type: "SET_BOARD", payload: board })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function autoSolve(board) {
  const dataToSend = {
    board: board
  }
  return (dispatch) => {
    fetch('https://sugoku.herokuapp.com/solve', {
      method: 'POST',
      body: encodeParams(dataToSend),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(response => response.json())
      .then(response => dispatch({ type: "SET_BOARD", payload: response.solution }))
      .catch(err => {
        console.log(err)
      })
  }
}

export function validate(board) {
  const dataToSend = {
    board: board
  }
  return (dispatch) => {
    fetch('https://sugoku.herokuapp.com/validate', {
      method: 'POST',
      body: encodeParams(dataToSend),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "SET_STATUS", payload: data.status })
      })
      .catch(err => {
        console.log(err)
      })
  }
}