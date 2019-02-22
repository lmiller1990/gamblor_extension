import {
  RECEIVE_TEAMS,
  REQUEST_TEAMS  
} from './types'

const defaultState = {
  isFetching: false,
  ids: [],
  all: {},
  initialLoadComplete: false
}

const teams = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_TEAMS:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_TEAMS:
      const ids = []
      const all = {...state.all}

      for (const game of action.payload) {
        if (!ids.includes(game.id)) {
          ids.push(game.id)
        }
        all[game.id] = game
      }

      action.payload.map(team => all[team.id] = team)
      return {
        ...state,
        initialLoadComplete: true,
        isFetching: false,
        ids,
        all
      }

    default:
      return state
  }
}

export {
  teams
}
