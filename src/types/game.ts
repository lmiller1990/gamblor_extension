export interface IGame {
  id: number
  firstBloodTeamId?: number
  firstTurretTeamId?: number
  date: Date
  createdAt: Date
  updatedAt: Date
  winnerId?: number
  loserId?: number
  redSideTeamId: number
  blueSideTeamId: number
  firstBaronTeamId?: number
  firstDragonTeamId?: number
  firstTurretPlayerId?: number
  firstDragonPlayerId?: number
  firstBaronPlayerId?: number
  firstBloodPlayerId?: number
  firstTurretType?: number
  leagueId?: number
  splitId?: number
  redSideTeamFbOdds?: number
  redSideTeamFtOdds?: number
  redSideTeamFdOdds?: number
  redSideTeamFbaronOdds?: number
  redSideTeamWinOdds?: number
  blueSideTeamFbOdds?: number;
  blueSideTeamFtOdds?: number
  blueSideTeamFdOdds?: number
  blueSideTeamFbaronOdds?: number
  blueSideTeamWinOdds?: number
  blueSideWinOdds?: number
  redSideWinOdds?: number
  gameNumber?: number
  matchUuid?: string
}