import Player from "../Component/Player/player";
import { connect } from "react-redux";
import { StoreTree } from "../../MainReducer/mainReducer";
import PlayerActionGenerator from "../Action/action";
import PlayerTwo from "../Component/Player/playes2";

interface playerProps {
    selectedPlayer: string;
}

export function mapStateToProps(appState: StoreTree ,ownProps:playerProps) {
    return {
        position: appState.player.playerTwoPosition,
        direction: appState.player.playerTwoDirection,
        selectedPlayer: ownProps.selectedPlayer,
        otherPlayerPosition: appState.player.position
    };
}
export function mapDispatchToProps(dispatch:any , ownProps:any){
    return {
        getNewPosition: (position: number[]) => dispatch (PlayerActionGenerator.getNewPosition2(position)),
        getDirection: (direction: string) => dispatch(PlayerActionGenerator.getDirection2(direction))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerTwo)