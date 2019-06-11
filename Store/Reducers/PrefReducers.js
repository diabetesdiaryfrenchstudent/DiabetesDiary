const initialState = {

    sexe:"",
    color:"blue",
    name:"",
    data:"",
    type:"",
    endInit:false



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
      case 'TOGGLE_COLOR':

        nextState = {
          ...state,
        color:action.value
        }
        return nextState|| state
        case 'TOGGLE_NAME':

          nextState = {
            ...state,
            name:action.value
          }
          return nextState|| state
          case 'TOGGLE_TYPE':

            nextState = {
              ...state,
              type:action.value,
              endInit:true
            }
            return nextState|| state
            case 'TOGGLE_DATA':

              nextState = {
                ...state,
                data:action.value
              }
              return nextState|| state
    default:
    return nextState ||state

  }
}
export default prefReducers
