export const MOVE_PLAYER = 'MOVE_PLAYER';
export type MOVE_PLAYER = typeof MOVE_PLAYER;

export const GETDIRECTION = 'GETDIRECTION';
export type GETDIRECTION = typeof GETDIRECTION;

export const ADDTILES = 'ADDTILES';
export type ADDTILES = typeof ADDTILES;

export interface MovePlayer {
    type: MOVE_PLAYER,
    payload: {
        position: number []
    }
}

export interface GetDirection {
    type: GETDIRECTION;
    payload: {
        direction: string;
    }
}
export type PlayerActions = MovePlayer |
GetDirection ;