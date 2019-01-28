import axios from 'axios'

import {
  REQUEST_GAMES,
  RECEIVE_GAMES
} from './types'

const requestGames = (payload) => ({
  type: REQUEST_GAMES,
  payload
})

const receiveGames = (payload) => ({
  type: RECEIVE_GAMES,
  payload
})

const fetchGames = (payload) => {
  return (dispatch) => {
    dispatch(requestGames(payload))

    return axios.get('http://localhost:3000/api/v1/games', {
      params: {
        start: payload.start,
        end: payload.end
      }
    })
      .then(response => dispatch(receiveGames(response.data)))
  }
}

export {
  fetchGames
}