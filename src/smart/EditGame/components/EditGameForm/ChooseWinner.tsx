import * as React from 'react'

import { ITeam } from '../../../../types/team'
import { Btn } from '../../../../dumb/Btn'

interface IProps {
  blueTeam: ITeam
  redTeam: ITeam
  updateResult: (winnerId: number, loserId: number) => void
}

class ChooseWinner extends React.PureComponent<IProps> {
  public render(): JSX.Element {
    const {
      blueTeam,
      redTeam,
      updateResult
    } = this.props

    return (
      <div>
        <div>
          <label>Winner</label>
        </div>
        <Btn
          label={blueTeam.name}
          onClick={() => updateResult(blueTeam.id, redTeam.id)}
        />
        <Btn
          label={redTeam.name}
          onClick={() => updateResult(redTeam.id, blueTeam.id)}
        />
      </div>
    )
  }
}

export {
  ChooseWinner
}
