import * as React from 'react'

import { TMarket } from '../../../../types/firstMarket'
import { ITeam } from '../../../../types/team'
import { Btn } from '../../../../dumb/Btn'

interface IProps {
  blueTeam: ITeam
  redTeam: ITeam
  updateField: (teamId: number, market: TMarket) => void
  label: string
  market: TMarket
}

class ChooseFirstMarket extends React.PureComponent<IProps> {
  public render(): JSX.Element {
    const {
      blueTeam,
      redTeam,
      updateField,
      label,
      market
    } = this.props

    return (
      <div>
        <div>
          <label>{label}</label>
        </div>
        <Btn
          label={blueTeam.name}
          onClick={() => updateField(blueTeam.id, market)}
        />
        <Btn
          label={redTeam.name}
          onClick={() => updateField(redTeam.id, market)}
        />
      </div>
    )
  }
}

export {
  ChooseFirstMarket
}
