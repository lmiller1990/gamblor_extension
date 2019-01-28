import * as React from 'react'

import { IEditGameStateProps, IEditGameDispatchProps } from './EditGameContainer'
import { EditGameForm } from './components/EditGameForm'

class EditGame extends React.PureComponent<IEditGameStateProps & IEditGameDispatchProps> {
  private get editingGame(): JSX.Element | null {
    const {
      game,
      redTeam,
      blueTeam,
      updateGame
    } = this.props

    if (! (game && redTeam && blueTeam)) {
      return null
    }

    return (
      <EditGameForm
        game={game}
        redTeam={redTeam}
        blueTeam={blueTeam}
        updateGame={updateGame}
      />
    )
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        {this.editingGame}
      </React.Fragment>
    )
  }
}

export {
  EditGame
}
