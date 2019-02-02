import * as React from 'react'

interface IProps {
  gameId: number
  redTeam: string
  blueTeam: string
  gameNumber: number
  date: Date
  editGame: (id: number) => void
}

class GameButton extends React.Component<IProps> {
  public render(): JSX.Element {
    const {
      gameId,
      gameNumber,
      redTeam,
      blueTeam,
      editGame
    } = this.props

    return (
      <button
        onClick={() => editGame(gameId)}
      >
        {blueTeam} vs {redTeam} (G{gameNumber})
        </button>
    )
  }
}

export {
  GameButton
}
