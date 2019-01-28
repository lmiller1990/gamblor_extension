import {
  RECEIVE_GAMES,
  EDIT_GAME,
  REQUEST_GAMES,
  REQUEST_UPDATE_GAME,
  SUCCESS_UPDATE_GAME
} from './types'

const defaultState = {
  isFetching: false,
  isUpdating: false,
  ids: [],
  all: {},
  editingGameId: null
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

    case EDIT_GAME:
      return {
        ...state,
        editingGameId: action.payload.gameId
      }

    case REQUEST_UPDATE_GAME:
      return {
        ...state,
        isUpdating: true
      }

    case SUCCESS_UPDATE_GAME:
      return {
        ...state,
        isUpdating: false,
        all: {
          ...state.all,
          [action.payload.id]: {...action.payload}
        }
      }



    default:
      return state
  }
}

export {
  games
}
