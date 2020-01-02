import React from 'react';
import { MAP_WIDTH, SPRITE_SIZE, MAP_HEIGHT } from '../../../Constant/const';

interface Props {
  getNewPosition: (position: number[]) => void;
  position: number[];
  getDirection: (direction: string) => void;
  tiles: any;
  addTiles: (tiles: any) => void;
}

interface State {
  position: number[];
}

export default class Player extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      position: [0, 0]
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      this.handleKeyDown(e);
    })
  }
  componentWillReceiveProps = (nextProps: Props) => {
    let { position } = nextProps;
    if ((position !== this.props.position) && ((position[0] >= 0 && position[0] <= MAP_WIDTH - SPRITE_SIZE) && (position[1] >= 0 && position[1] <= MAP_HEIGHT - SPRITE_SIZE))) {
      this.setState({
        position: position
      })
    }
  }

  handleKeyDown = (e: any) => {
    let { getNewPosition, position } = this.props;
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        return getNewPosition(this.getPosition("WEST", position));
      case 38:
        return getNewPosition(this.getPosition("NORTH", position));
      case 39:
        return getNewPosition(this.getPosition("EAST", position));
      case 40:
        return getNewPosition(this.getPosition("SOUTH", position));
      default:
        return;
    }
  }

  getPosition = (direction: string, newPosition: number[]) => {
    let oldPosition = this.state.position;
    // let newPosition = this.state.position;
    // let { tiles, addTiles } = this.props;
    // let y = newPosition[1] / SPRITE_SIZE;
    // let x = newPosition[0] / SPRITE_SIZE;
    // debugger;
    // let nextTiles = tiles[y][x];

    if ((newPosition[0] >= 0 && newPosition[0] <= MAP_WIDTH) && (newPosition[1] >= 0 && newPosition[1] <= MAP_HEIGHT)) {
      // if (nextTiles < 5) {
        switch (direction) {
          case 'WEST':
            return [oldPosition[0] - SPRITE_SIZE, oldPosition[1]];
          case 'EAST':
            return [oldPosition[0] + SPRITE_SIZE, oldPosition[1]];
          case 'NORTH':
            return [oldPosition[0], oldPosition[1] - SPRITE_SIZE];
          case 'SOUTH':
            return [oldPosition[0], oldPosition[1] + SPRITE_SIZE];
          default:
            return [oldPosition[0], oldPosition[1]];
        }
      }
      else {
        return [oldPosition[0], oldPosition[1]];
      }
    // }
    // else {
    //   return [oldPosition[0], oldPosition[1]];
    // }
  }

  render() {
    return (
      <div>
        <div id="player-container"
          style={{
            top: this.state.position[1],
            left: this.state.position[0],
            backgroundPosition: '0 0',
          }}
        />
      </div>
    );
  }
}


