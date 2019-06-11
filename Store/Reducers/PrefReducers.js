const initialState = {
  sexe: "",
  color: "blue",
  name: "",
  data: "",
  type: "",
  endInit: false //Variable to check if the user pass all the initialization screen
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
        type: action.value,
        endInit: true //Last screen of the initialization, we can say that's over
      }
      return nextState || state
    case 'TOGGLE_DATA':

      nextState = {
        ...state,
        data: action.value
      }
      return nextState || state
    default:
      return nextState || state

  }
}
export default prefReducers
