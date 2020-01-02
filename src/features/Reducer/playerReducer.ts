import PlayerState, { defaultPlayerState } from "../State/state";
import { MOVE_PLAYER, PlayerActions } from "../Action/def";

export default function playerReducer (state: PlayerState = defaultPlayerState(), action : PlayerActions): PlayerState {
    switch (action.type) {
        case MOVE_PLAYER:
            return {...state, position: action.payload.position}
        default: 
            return {...state};
        
    }
}