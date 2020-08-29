import PlayerState, { defaultPlayerState } from "../State/state";
import { MOVE_PLAYER, PlayerActions, MOVE_PLAYER2 } from "../Action/def";

export default function playerReducer (state: PlayerState = defaultPlayerState(), action : PlayerActions): PlayerState {
    switch (action.type) {
        case MOVE_PLAYER:
            return {...state, position: action.payload.position}
        case MOVE_PLAYER2: {
            return { ...state, playerTwoPosition: action.payload.position}
        }
        default: 
            return {...state};
        
    }
}