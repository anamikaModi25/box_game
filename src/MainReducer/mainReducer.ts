import { combineReducers } from "redux";
import playerReducer from '../features/Reducer/playerReducer';
import PlayerState from "../features/State/state";

export const mainReducer = combineReducers({
    player : playerReducer
});

export interface StoreTree {
    player: PlayerState
}
