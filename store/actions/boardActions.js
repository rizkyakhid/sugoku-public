export function generateBoard() {
  return (dispatch) => {
    fetch('https://sugoku.herokuapp.com/board')
      .then(res => res.json())
      .then(({board}) => {
        dispatch({ type: "SET_BOARD", payload: board })
      })
      .catch(err => {
        console.log(err)
      })
  }
}