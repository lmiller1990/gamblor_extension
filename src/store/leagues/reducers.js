import * as types from './types'

const defaultState = {
  isFetching: false,
  ids: [],
  all: {}
}

const leagues = (state = defaultState, action) => {
  switch (action.type) {
    case types.REQUEST_LEAGUES:
      return {
        ...state,
        isFetching: true
      }

    case types.RECEIVE_LEAGUES:
      const all = {}
      const ids = action.payload.map(league => league.id)
      action.payload.forEach(league => {
        all[league.id] = league
      })

      return {
        ...state,
        all,
        ids,
        isFetching: false
      }

    default: 
      return state
  }
}

export {
  leagues
}
