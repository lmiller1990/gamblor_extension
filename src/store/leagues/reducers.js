import * as types from './types'

const defaultState = {
  isFetching: false,
  ids: [],
  all: {},
  selectedLeagueId: null,
  initialLoadComplete: false
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
        initialLoadComplete: true,
        isFetching: false
      }

    case types.SET_CURRENT_LEAGUE_ID:
      return {
        ...state,
        selectedLeagueId: action.payload.id
      }

    default: 
      return state
  }
}

export {
  leagues
}
