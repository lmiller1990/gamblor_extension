import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { SelectLeague } from './SelectLeague'

const SelectLeagueContainer = connect()(SelectLeague)

export {
  SelectLeagueContainer
}
