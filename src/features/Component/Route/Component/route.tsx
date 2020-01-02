import React from 'react';
import { tiles } from '../../World/map';
import MapRow from '../rows';
interface Props {
    tiles: any;
}

export default function Route(props: Props) {
    return (
        <div id="route-container">
            {
                tiles.map((row, i) =>
                    <div key={i}>
                        <MapRow tiles={row} />
                    </div>
                )
            }
        </div>
    );
}