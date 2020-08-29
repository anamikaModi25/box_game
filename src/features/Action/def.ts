export const MOVE_PLAYER = 'MOVE_PLAYER';
export type MOVE_PLAYER = typeof MOVE_PLAYER;

export const GETDIRECTION = 'GETDIRECTION';
export type GETDIRECTION = typeof GETDIRECTION;

export const MOVE_PLAYER2 = 'MOVE_PLAYER2';
export type MOVE_PLAYER2 = typeof MOVE_PLAYER2;

export const GETDIRECTION2 = 'GETDIRECTION2';
export type GETDIRECTION2 = typeof GETDIRECTION2;

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

export interface MovePlayer2 {
    type: MOVE_PLAYER2,
    payload: {
        position: number []
    }
}

export interface GetDirection2 {
    type: GETDIRECTION2;
    payload: {
        direction: string;
    }
}
export type PlayerActions = MovePlayer |
GetDirection |
MovePlayer2 |
GetDirection2 ;