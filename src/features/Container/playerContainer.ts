import Player from "../Component/Player/player";
import { connect } from "react-redux";
import { StoreTree } from "../../MainReducer/mainReducer";
import PlayerActionGenerator from "../Action/action";
import MapActionGenerator from "../Component/Route/Action/actionGen";

export function mapStateToProps(appState: StoreTree ,ownProps:any) {
    return {
        position: appState.player.position,
        direction: appState.player.direction,
        tiles: appState.map.tiles
    };
}
export function mapDispatchToProps(dispatch:any , ownProps:any){
    return {
        getNewPosition: (position: number[]) => dispatch (PlayerActionGenerator.getNewPosition(position)),
        getDirection: (direction: string) => dispatch(PlayerActionGenerator.getDirection(direction)),
        getTiles: (tiles: any) => dispatch(MapActionGenerator.addTiles(tiles))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)