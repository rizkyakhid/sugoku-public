const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')

const encodeParams = (params) =>
  Object.keys(params)
    .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
    .join('&');

export function generateBoard() {
  return (dispatch) => {
    fetch('https://sugoku.herokuapp.com/board?difficulty=random')
      .then(res => res.json())
      .then(({ board }) => {
        dispatch({ type: "SET_BOARD", payload: board })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function autoSolve() {
  return (dispatch, getState) => {
    console.log(getState().board, 'INI BOARDNYA DI ACTIONS')
    fetch('https://sugoku.herokuapp.com/solve', {
      method: 'POST',
      body: encodeParams(getState().board),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "SET_BOARD", payload: data.solution })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function validate() {
  return (dispatch, getState) => {
    fetch('https://sugoku.herokuapp.com/validate', {
      method: 'POST',
      body: encodeParams(getState().board),
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