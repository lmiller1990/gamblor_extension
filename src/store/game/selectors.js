import { createSelector } from 'reselect'

const getGames = (state) => state.games.all
const getEditingGameId = (state) => state.games.editingGameId

const getEditingGame = createSelector(
  [getGames, getEditingGameId],
  (games, editingGameId) => {
    return games[editingGameId]
  }
)

export {
  getEditingGame
}
