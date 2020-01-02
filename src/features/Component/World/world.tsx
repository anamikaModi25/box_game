import React from 'react';
import Player from '../../Container/playerContainer';
import Route from '../Route/Container/routeCon';

export default class World extends React.Component {
    render() {
        return (
            <div id="world-container">
                <Route/>
                <Player/>
            </div>
        );
    }
}