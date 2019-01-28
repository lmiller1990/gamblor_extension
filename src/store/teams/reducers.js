import {
  RECEIVE_TEAMS,
  REQUEST_TEAMS  
} from './types'

const defaultState = {
  isFetching: false,
  ids: [],
  all: {}
}

const teams = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_TEAMS:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_TEAMS:
      const all = {}
      action.payload.map(team => all[team.id] = team)
      return {
        ...state,
        isFetching: false,
        ids: action.payload.map(team => team.id),
        all
      }

    default:
      return state
  }
}

export {
  teams
}