import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { IGame } from '../../types/game'
import { ITeam } from '../../types/team'
import { ILeague } from '../../types/league'
import { SelectGames } from './SelectGames'
import { fetchGames } from '../../store/game'
import { editGame, switchSides } from '../../store/game/actions'
import { fetchLeagues } from '../../store/leagues'
import { selectCurrentLeague } from '../../store/leagues/selectors'
import { fetchTeams } from '../../store/teams'

export interface IStateProps {
  gameIds: number[]
  allGames: {
    [key: number]: IGame
  }
  allTeams: {
    [key: number]: ITeam
  }
  currentLeague: ILeague
}


export interface IDispatchProps {
  fetchGames: (start: Date, end: Date) => void
  fetchTeams: () => void
  editGame: (gameId: number) => void
  fetchLeagues: () => void
  switchSides: (gameId: number) => void
}

const mapStateToProps = (state: any): IStateProps => {
  const currentLeague = selectCurrentLeague(state)

  return {
    currentLeague,
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
    fetchTeams: () => dispatch(fetchTeams()),
    editGame: (gameId: number) => dispatch(editGame({ gameId })),
    fetchLeagues: () => dispatch(fetchLeagues()),
    switchSides: (gameId: number) => dispatch(switchSides({ gameId }))
  }
}

const SelectGamesContainer =
  // @ts-ignore
  connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(SelectGames)

export {
  SelectGamesContainer
}