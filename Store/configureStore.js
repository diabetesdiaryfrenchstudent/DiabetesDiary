import { createStore,combineReducers } from 'redux';
import prefReducers from './Reducers/PrefReducers'
import dataReducers from './Reducers/DataReducers'

export default createStore(combineReducers({prefReducers,dataReducers}))
