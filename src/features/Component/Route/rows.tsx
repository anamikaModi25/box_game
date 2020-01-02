import React from 'react';
import MapTiles from './tile';

interface Props {
    tiles: any;
}

export default function MapRow(props: Props) {
    return (
        <div className="row" style={{marginBottom: 0}}>
        { props.tiles.map((tile: any) => <MapTiles tiles={tile} />) }
        </div>
    );
}