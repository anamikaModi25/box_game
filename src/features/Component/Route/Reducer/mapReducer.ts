import { ADDTILES } from "../../../Action/def";
import MapState, { defaultMapState } from "../State/mapState";

export default function mapReducer (state: MapState = defaultMapState(), action : any): MapState {
    switch (action.type) {
        case ADDTILES:
            return {...action.payload}
        default: 
            return {...state};   
    }
}