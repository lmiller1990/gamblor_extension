import { createSelector } from 'reselect'

const getLeagues = (state) => state.leagues.all
const getLeagueIds = (state) => state.leagues.ids
const currentLeagueId = (state) => state.leagues.selectedLeagueId

const selectLeagueIds = createSelector([getLeagueIds], (ids) => ids)

const selectAllLeagues = createSelector([getLeagues], (allLeagues) => allLeagues)

const selectCurrentLeague = createSelector(
  [currentLeagueId, getLeagues],
  (id, leagues) => leagues[id]
)

export {
  selectLeagueIds,
  selectAllLeagues,
  selectCurrentLeague
}
