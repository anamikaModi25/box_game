import { combineReducers } from "redux";
import playerReducer from '../features/Reducer/playerReducer';
import PlayerState from "../features/State/state";
import mapReducer from "../features/Component/Route/Reducer/mapReducer";
import MapState from "../features/Component/Route/State/mapState";

export const mainReducer = combineReducers({
    player : playerReducer,
    map: mapReducer
});

export interface StoreTree {
    player: PlayerState,
    map: MapState
}
