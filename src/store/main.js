import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddlware from 'redux-thunk'

import { games } from './game'
import { teams } from './teams'

const rootReducer = combineReducers({
   games,
   teams
})


const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddlware
  )
)

export {
  store
}
