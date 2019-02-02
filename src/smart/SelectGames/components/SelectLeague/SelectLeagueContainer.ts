import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { SelectLeague } from './SelectLeague'
import { ILeague } from '../../../../types/league';
import { selectLeagueIds, selectAllLeagues } from '../../../../store/leagues/selectors';
import { setCurrentLeagueId } from '../../../../store/leagues/actions';

export interface ISelectLeagueProps {
  leagueIds: number[]
  leagues: {
    [id: number]: ILeague
  }
}

export interface IDispatchProps {
  setCurrentLeagueId: (leagueId: number) => void
}

const mapStateToProps = (state: any): ISelectLeagueProps => {
  return {
    leagueIds: selectLeagueIds(state),
    leagues: selectAllLeagues(state)
  }
}

const mapPropsToDispatch = (dispatch: Dispatch<any>): IDispatchProps => {
  return {
    setCurrentLeagueId: (id) => dispatch(setCurrentLeagueId({ id }))
  }
}

const SelectLeagueContainer = 
// @ts-ignore
  connect<ISelectLeagueProps, IDispatchProps>(mapStateToProps, mapPropsToDispatch)(SelectLeague)

export {
  SelectLeagueContainer
}
