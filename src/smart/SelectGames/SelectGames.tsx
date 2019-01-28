import * as React from 'react'

import { IStateProps, IDispatchProps } from './SelectGamesContainer'
import { GameButton } from './components/GameButton'

interface IState {
  loaded: boolean
}

class SelectGames extends React.PureComponent<IStateProps & IDispatchProps, IState> {
  constructor(props: IStateProps & IDispatchProps) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  componentDidMount(): void {
    Promise.all([
      this.props.fetchGames(new Date(), new Date(3000, 1, 1)),
      this.props.fetchTeams()
    ]).then(() => {
      this.setState({ loaded: true })
    })
  }

  private get games(): JSX.Element[] | null {
    if (!this.state.loaded) {
      return null
    }

    const {
      gameIds,
      allGames,
      allTeams,
      editGame
    } = this.props

    return gameIds.map(id => {
      const game = allGames[id]
      const redTeam = allTeams[game.redSideTeamId]
      const blueTeam = allTeams[game.blueSideTeamId]

      return (
        <GameButton
          key={id}
          gameId={id}
          redTeam={redTeam.name}
          blueTeam={blueTeam.name}
          date={game.date}
          editGame={editGame}
        />
      )
    })
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        {this.games}
      </React.Fragment>
    )
  }
}

export {
  SelectGames
}
