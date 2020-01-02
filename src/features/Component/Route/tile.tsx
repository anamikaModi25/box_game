import React from 'react';
import { SPRITE_SIZE } from '../../../Constant/const';

interface Props {
    tiles: any;
}

export default function MapTiles(props: Props) {
    return (
        <div className="tile" id={getTile(props.tiles)} style={{height: SPRITE_SIZE, width: SPRITE_SIZE}}>
            {/* {props.tiles} */}
        </div>
    );
}

function getTile(type: number) {
    switch(type) {
        case 0: {
            return 'grass';
        }
        case 1: {
            return 'tree';
        }
        case 2: {
            return 'rock';
        }
    }
}