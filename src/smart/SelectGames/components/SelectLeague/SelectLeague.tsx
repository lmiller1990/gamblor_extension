import * as React from 'react'

import { ISelectLeagueProps, IDispatchProps } from './SelectLeagueContainer'
import { Btn } from '../../../../dumb/Btn'
import { ISplit } from '../../../../types/split'

class SelectLeague extends React.PureComponent<ISelectLeagueProps & IDispatchProps> {
  private get splits(): ISplit[] {
    const {
      leagues,
      leagueIds
    } = this.props;

    return leagueIds.map(id => leagues[id].splits).flat()
  }

  public render(): JSX.Element {
    const {
      leagues,
      leagueIds,
      setCurrentLeagueId
    } = this.props;

    return (
      <div>
        Select League
        {leagueIds.map(id =>
          <div key={id}>
            <Btn
              onClick={() => setCurrentLeagueId(id)}
              label={leagues[id].name}
            />
          </div>
        )}
      </div>
    )
  }
}

export {
  SelectLeague
}
