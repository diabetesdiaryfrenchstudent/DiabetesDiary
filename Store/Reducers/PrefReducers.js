const initialState = {
  sexe:"NO",
  color:"blue"
}

function prefReducers(state=initialState,action){
  let nextState
  switch (action.type) {
    case 'TOGGLE_SEXE':

      nextState = {
        ...state,
        sexe:action.value
      }
      return nextState|| state
      break;
      case 'TOGGLE_COLOR':

        nextState = {
          ...state,
          color:action.value
        }
        return nextState|| state
        break;
        case 'TOGGLE_NAME':

          nextState = {
            ...state,
            name:action.value
          }
          return nextState|| state
          break;
          case 'TOGGLE_TYPE':

            nextState = {
              ...state,
              type:action.value
            }
            return nextState|| state
            break;
            case 'TOGGLE_DATA':

              nextState = {
                ...state,
                data:action.value
              }
              return nextState|| state
              break;
    default:
    return nextState ||state

  }
}
export default prefReducers
