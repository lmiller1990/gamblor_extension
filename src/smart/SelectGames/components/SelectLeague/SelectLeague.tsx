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

  private setCurrentLeagueId(id: number): void {
    const {
      setCurrentLeagueId
    } = this.props

    window.localStorage.setItem('currentLeagueId', id.toString())
    setCurrentLeagueId(id)
  }

  public componentWillMount(): void {
    const {
      setCurrentLeagueId
    } = this.props

    const currentLeagueId = window.localStorage.getItem('currentLeagueId')

    if (currentLeagueId) {
      setCurrentLeagueId(parseInt(currentLeagueId, 10))      
    }
  }

  public render(): JSX.Element {
    const {
      leagues,
      leagueIds
    } = this.props;

    this.setCurrentLeagueId = this.setCurrentLeagueId.bind(this)

    return (
      <div>
        Select League
        {leagueIds.map(id =>
          <div key={id}>
            <Btn
              onClick={() => this.setCurrentLeagueId(id)}
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
