const initialState = {
  sexe: "",
  color: "#DDEAF2",
  name: "",
  type: "",
  endInit: true //Variable to check if the user pass all the initialization screen
}


//Method which update informations of user according to variable which is needed to be modify and the value
function prefReducers(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_SEXE':
      nextState = {
        ...state,
        sexe: action.value
      }
      return nextState || state



    case 'TOGGLE_COLOR':

      nextState = {
        ...state,
        color: action.value
      }
      return nextState || state



    case 'TOGGLE_NAME':

      nextState = {
        ...state,
        name: action.value
      }
      return nextState || state



    case 'TOGGLE_TYPE':
      nextState = {
        ...state,
        type: action.value
      }
      return nextState || state



    case 'TOGGLE_END':
      nextState = {
        ...state,
        endInit: true //Last screen of the initialization, we can say that's over
      }
      return nextState || state



    case 'TOGGLE_MIN':
      nextState = {
        ...state,
        min: action.value //Last screen of the initialization, we can say that's over
      }
      return nextState || state



    case 'TOGGLE_MAX':
      nextState = {
        ...state,
        max: action.value //Last screen of the initialization, we can say that's over
      }
      return nextState || state
    default:
      return nextState || state

  }
}
export default prefReducers
