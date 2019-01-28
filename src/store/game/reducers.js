import {
  RECEIVE_GAMES,
  REQUEST_GAMES  
} from './types'

const defaultState = {
  isFetching: false,
  ids: [],
  all: {}
}

const games = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_GAMES:
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_GAMES:
      const all = {}
      action.payload.map(game => all[game.id] = game)
      return {
        ...state,
        isFetching: false,
        ids: action.payload.map(game => game.id),
        all
      }

    default:
      return state
  }
}

export {
  games
}
