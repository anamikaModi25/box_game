import { connect } from "react-redux";
import { StoreTree } from "../../../../MainReducer/mainReducer";
import Route from "../Component/route";
export function mapStateToProps(appState: StoreTree, ownProps: any) {
    return {
        tiles: appState.map.tiles
    }
}
export function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Route);