const initialState = {

}

function dataReducers(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_BG':
      nextState = {
        ...state,
        bg: action.value
      }
      return nextState || state
    case 'TOGGLE_INS':
      nextState = {
        ...state,
        ins: action.value
      }
      return nextState || state
    case 'TOGGLE_WEI':
      nextState = {
        ...state,
        wei: action.value
      }
      return nextState || state
    case 'TOGGLE_MED':
      nextState = {
        ...state,
        med: action.value
      }
      return nextState || state
    case 'TOGGLE_ACT':
      nextState = {
        ...state,
        act: action.value
      }
      return nextState || state
    case 'TOGGLE_CAR':
      nextState = {
        ...state,
        car: action.value
      }
      return nextState || state
    case 'TOGGLE_CAL':
      nextState = {
        ...state,
        cal: action.value
      }
      return nextState || state
      return nextState || state
    default:
      return nextState || state
  }
}
export default dataReducers
