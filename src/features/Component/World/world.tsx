import React from 'react';
import Player from '../../Container/playerContainer';
import Route from '../Route/Component/route';
import PlayerTwo from '../../Container/player2Container';

interface Props{

}
interface State {
    player: string;
}
export default class World extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            player: "player1"
        }
    }

    changePlayer = (player: string) => {
        this.setState({player: player})
    }

    render() {
        let { player } = this.state;
        return (
            <div id="world-container">
                <Route/>
                <Player selectedPlayer={player} changePlayer={this.changePlayer} />
                <PlayerTwo selectedPlayer={player} changePlayer={this.changePlayer}  />
            </div>
        );
    }
}