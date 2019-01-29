import axios from 'axios'

import {
  RECEIVE_TEAMS,
  REQUEST_TEAMS
} from './types'

const requestTeams = (payload) => ({
  type: REQUEST_TEAMS,
  payload
})

const receiveTeams = (payload) => ({
  type: RECEIVE_TEAMS,
  payload
})

const fetchTeams = (payload) => {
  return (dispatch) => {
    dispatch(requestTeams(payload))

    return axios.get(`${process.env.REACT_APP_API_ENDPOINT}/teams`)
      .then(response => dispatch(receiveTeams(response.data)))
  }
}

export {
  fetchTeams
}