import * as React from 'react'

import { IGame } from '../../../../types/game'
import { ITeam } from '../../../../types/team'
import { TMarket } from '../../../../types/firstMarket'
import { ChooseFirstMarket } from './ChooseFirstMarket'
import { ChooseWinner } from './ChooseWinner'

interface IProps {
  game: IGame
  blueTeam: ITeam
  redTeam: ITeam
  updateGame: (game: IGame) => void

}

class EditGameForm extends React.PureComponent<IProps> {
  updateFirstTeamId(teamId: number, market: TMarket): void {
    const {
      game
    } = this.props

    const updatedGame: IGame = {
      ...game,
      [market]: teamId
    }

    this.props.updateGame(updatedGame)
  }

  updateResult(winnerId: number, loserId: number): void {
    const {
      game
    } = this.props

    const updatedGame: IGame = {
      ...game,
      winnerId,
      loserId
    }

    this.props.updateGame(updatedGame)
  }

  private getTeamName(id: number | undefined): string {
    const {
      blueTeam,
      redTeam
    } = this.props

    if (!id) {
      return ''
    }

    return blueTeam.id === id ? blueTeam.name : redTeam.name
  }

  public render(): JSX.Element {
    const {
      blueTeam,
      redTeam,
      game
    } = this.props

    this.updateFirstTeamId = this.updateFirstTeamId.bind(this)
    this.updateResult = this.updateResult.bind(this)

    return (
      <React.Fragment>
        <ChooseFirstMarket
          blueTeam={blueTeam}
          redTeam={redTeam}
          updateField={this.updateFirstTeamId}
          label='First Blood'
          market='firstBloodTeamId'
          successfulTeamName={this.getTeamName(game.firstBloodTeamId)}
        />

        <ChooseFirstMarket
          blueTeam={blueTeam}
          redTeam={redTeam}
          updateField={this.updateFirstTeamId}
          label='First Turret'
          market='firstTurretTeamId'
          successfulTeamName={this.getTeamName(game.firstTurretTeamId)}
        />

        <ChooseFirstMarket
          blueTeam={blueTeam}
          redTeam={redTeam}
          updateField={this.updateFirstTeamId}
          label='First Dragon'
          market='firstDragonTeamId'
          successfulTeamName={this.getTeamName(game.firstDragonTeamId)}
        />

        <ChooseFirstMarket
          blueTeam={blueTeam}
          redTeam={redTeam}
          updateField={this.updateFirstTeamId}
          label='First Baron'
          market='firstBaronTeamId'
          successfulTeamName={this.getTeamName(game.firstBaronTeamId)}
        />

        <ChooseWinner
          blueTeam={blueTeam}
          redTeam={redTeam}
          updateResult={this.updateResult}
        />
      </React.Fragment>
    )
  }
}

export {
  EditGameForm
}