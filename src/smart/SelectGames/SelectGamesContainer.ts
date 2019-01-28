import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { IGame } from '../../types/game'
import { ITeam } from '../../types/team'
import { SelectGames } from './SelectGames'
import { fetchGames } from '../../store/game'
import { fetchTeams } from '../../store/teams'

export interface IStateProps {
  gameIds: number[]
  allGames: {
    [key: number]: IGame
  }
  allTeams: {
    [key: number]: ITeam
  }
}


export interface IDispatchProps {
  fetchGames: (start: Date, end: Date) => void
  fetchTeams: () => void
}

const mapStateToProps = (state: any): IStateProps => {
  return {
    gameIds: state.games.ids,
    allGames: state.games.all,
    allTeams: state.teams.all
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): IDispatchProps => {
  return {
    fetchGames: (start: Date, end: Date): void => {
      dispatch(fetchGames({ start, end }))
    },
    fetchTeams: () => dispatch(fetchTeams())
    
  }
}

const SelectGamesContainer =
  // @ts-ignore
  connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(SelectGames)

export {
  SelectGamesContainer
}