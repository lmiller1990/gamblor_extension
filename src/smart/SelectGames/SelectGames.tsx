import * as React from 'react'

import { IStateProps, IDispatchProps } from './SelectGamesContainer'
import { GameButton } from './components/GameButton'
import { SelectLeagueContainer } from './components/SelectLeague'
import { Btn } from '../../dumb/Btn'

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
      this.props.fetchLeagues(),
      this.props.fetchGames(new Date(), new Date(3000, 1, 1)),
      this.props.fetchTeams()
    ]).then(() => {
      this.setState({ loaded: true })
    })
  }

  private get gameIdsByFilteredByLeague(): number[] {
    const {
      gameIds,
      allGames,
      currentLeague
    } = this.props

    if (!currentLeague) {
      return gameIds
    }

    return gameIds.filter(id => allGames[id].leagueId === currentLeague.id)
  }

  private get games(): JSX.Element[] | null {
    if (!this.state.loaded) {
      return null
    }

    const {
      allGames,
      allTeams,
      switchSides
    } = this.props

    return this.gameIdsByFilteredByLeague.map(id => {
      const game = allGames[id]
      const redTeam = allTeams[game.redSideTeamId]
      const blueTeam = allTeams[game.blueSideTeamId]

      return (
        <div key={id}>
          <GameButton
            gameId={id}
            gameNumber={game.gameNumber}
            redTeam={redTeam.name}
            blueTeam={blueTeam.name}
            date={game.date}
            editGame={id => this.setEditingGameId(id)}
          />
          <Btn
            label='⇄'
            onClick={() => switchSides(id)}
          />
        </div>
      )
    })
  }

  private setEditingGameId(id: number): void {
    const {
      editGame
    } = this.props

    editGame(id)
  }

  public componentWillMount(): void {
    const {
      editGame
    } = this.props

    const currentGameId = window.localStorage.getItem('currentGameId')

    if (currentGameId) {
      editGame(parseInt(currentGameId, 10))      
    }
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <SelectLeagueContainer />
        {this.games}
      </React.Fragment>
    )
  }
}

export {
  SelectGames
}
