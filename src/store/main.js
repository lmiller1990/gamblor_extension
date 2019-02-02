import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddlware from 'redux-thunk'

import { games } from './game'
import { teams } from './teams'
import { leagues } from './leagues'

const rootReducer = combineReducers({
   games,
   teams,
   leagues
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
