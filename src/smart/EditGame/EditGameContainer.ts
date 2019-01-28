import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { IGame } from '../../types/game'
import { ITeam } from '../../types/team'
import { getEditingGame } from '../../store/game/selectors'
import { updateGame } from '../../store/game'
import { EditGame } from './EditGame'

export interface IEditGameStateProps {
  game?: IGame,
  blueTeam?: ITeam
  redTeam?: ITeam
}

export interface IEditGameDispatchProps {
  updateGame: (game: IGame) => void
}

const mapStateToProps = (state: any): IEditGameStateProps => {
  const editingGame: IGame = getEditingGame(state)

  if (!editingGame) {
    return {}
  }

  return {
    game: editingGame,
    blueTeam: state.teams.all[editingGame.blueSideTeamId],
    redTeam: state.teams.all[editingGame.redSideTeamId]
  }
}

const mapPropsToDispatch = (dispatch: Dispatch<any>): IEditGameDispatchProps => {
  return {
    updateGame: (game: IGame) => dispatch(updateGame(game))
  }
}
const EditGameContainer = connect<IEditGameStateProps, IEditGameDispatchProps>
  // @ts-ignore
  (mapStateToProps, mapPropsToDispatch)(EditGame)
  
export {
  EditGameContainer
}
