import * as types from './types'
import axios from 'axios';

const requestLeagues = (payload) => ({
  type: types.REQUEST_LEAGUES,
  payload
})

const receiveLeagues = (payload) => ({
  type: types.RECEIVE_LEAGUES,
  payload
})

const fetchLeagues = () => {
  return async (dispatch) => {
    dispatch(requestLeagues())

    const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/leagues`)
    dispatch(receiveLeagues(response.data))
  }
}

export {
  fetchLeagues
}
