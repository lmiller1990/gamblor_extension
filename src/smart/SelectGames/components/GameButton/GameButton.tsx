import * as React from 'react'
import { IGame } from '../../../../types/game'

interface IProps {
  gameId: number
  redTeam: string
  blueTeam: string
  date: Date
  editGame: (id: number) => void
}

class GameButton extends React.Component<IProps> {
  public render(): JSX.Element {
    const {
      gameId,
      redTeam,
      blueTeam,
      date,
      editGame
    } = this.props

    return (
      <div>
        <button
          onClick={() => editGame(gameId)}
        >
          {blueTeam} vs {redTeam}
        </button>
      </div>
    )
  }
}

export {
  GameButton
}
