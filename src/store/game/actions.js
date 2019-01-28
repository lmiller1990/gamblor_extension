import axios from 'axios'

import {
  REQUEST_GAMES,
  RECEIVE_GAMES,
  EDIT_GAME,
  REQUEST_UPDATE_GAME,
  SUCCESS_UPDATE_GAME
} from './types'

const requestGames = (payload) => ({
  type: REQUEST_GAMES,
  payload
})

const receiveGames = (payload) => ({
  type: RECEIVE_GAMES,
  payload
})

const requestUpdateGame = payload => ({
  type: REQUEST_UPDATE_GAME,
  payload
})

const successUpdateGame = payload => ({
  type: SUCCESS_UPDATE_GAME,
  payload
})

const updateGame = (payload) => {
  return (dispatch) => {
    dispatch(requestUpdateGame(payload))

    return axios.put(`${process.env.REACT_APP_API_ENDPOINT}/games/${payload.id}`, payload)
      .then(response => {
        dispatch(successUpdateGame(response.data))
      })
  }
}

const fetchGames = (payload) => {
  return (dispatch) => {
    dispatch(requestGames(payload))

    return axios.get(`${process.env.REACT_APP_API_ENDPOINT}/games`, {
      params: {
        start: payload.start,
        end: payload.end
      }
    })
      .then(response => dispatch(receiveGames(response.data)))
  }
}

const editGame = (payload) => ({
  type: EDIT_GAME,
  payload
})

export {
  fetchGames,
  editGame,
  updateGame
}