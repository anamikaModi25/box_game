import Player from "../Component/Player/player";
import { connect } from "react-redux";
import { StoreTree } from "../../MainReducer/mainReducer";
import PlayerActionGenerator from "../Action/action";

interface playerProps {
    selectedPlayer: string;
}
export function mapStateToProps(appState: StoreTree ,ownProps: playerProps) {
    return {
        position: appState.player.position,
        direction: appState.player.direction,
        selectedPlayer: ownProps.selectedPlayer,
        otherPlayerPosition: appState.player.playerTwoPosition
    };
}
export function mapDispatchToProps(dispatch:any , ownProps:any){
    return {
        getNewPosition: (position: number[]) => dispatch (PlayerActionGenerator.getNewPosition(position)),
        getDirection: (direction: string) => dispatch(PlayerActionGenerator.getDirection(direction))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)