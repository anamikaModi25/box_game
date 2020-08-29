import React from 'react';
import { MAP_WIDTH, SPRITE_SIZE, MAP_HEIGHT } from '../../../Constant/const';

interface Props {
  getNewPosition: (position: number[]) => void;
  position: number[];
  getDirection: (direction: string) => void;
  changePlayer: (player: string) => void;
  selectedPlayer: string;
  otherPlayerPosition: number[]
}

interface State {
  position: number[];
}

export default class Player extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      position: [140, 140]
    };
  }

  componentDidMount() {
    let { selectedPlayer } = this.props;
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
    let { getNewPosition, position, selectedPlayer } = this.props;
    if (selectedPlayer === "player1") {
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
  }

  ovservePlayer = (newPos: number[], oldPos: number[]) => {
    const { otherPlayerPosition } = this.props;
    const y = newPos[1];
    const x = newPos[0];
    const ox = otherPlayerPosition[0] + 100;
    const oy = otherPlayerPosition[1] + 100;
    if (x === oldPos[0] && y === oldPos[1]) {
      return false
    } else if (ox > oldPos[0] && y) {

    }
  }

  getPosition = (direction: string, newPosition: number[]) => {
    let oldPosition = this.state.position;
    let { otherPlayerPosition } = this.props;
    if ((newPosition[0] >= 0 && newPosition[0] <= MAP_WIDTH) && (newPosition[1] >= 0 && newPosition[1] <= MAP_HEIGHT)) {
      switch (direction) {
        case 'WEST': {
          if (oldPosition[0] > 0) {
            if (otherPlayerPosition[0] === (oldPosition[0] - SPRITE_SIZE) && otherPlayerPosition[1] === oldPosition[1]) {
                return [oldPosition[0], oldPosition[1]]
            } else {
                if (newPosition[0] + 100 <= otherPlayerPosition[0] + 1) {
                    return [oldPosition[0] - SPRITE_SIZE, oldPosition[1]];
                } else {
                    if ((otherPlayerPosition[0] + 100) > newPosition[0] && ((otherPlayerPosition[1] + 100) > newPosition[1]) && (otherPlayerPosition[1] - 100) < newPosition[1]) {
                        return [oldPosition[0], oldPosition[1]]
                    } else if ((otherPlayerPosition[0] + 100) > newPosition[0] && (newPosition[1] > (otherPlayerPosition[1] - 100) && newPosition[1] < otherPlayerPosition[1] - 100)) {
                        return [oldPosition[0], oldPosition[1]]
                    } else {
                        return [oldPosition[0] - SPRITE_SIZE, oldPosition[1]];
                    }
                }
            }
        } else {
            return [oldPosition[0], oldPosition[1]]
        }
      }
        case 'EAST':
          if (oldPosition[0] < 600) {
            if (otherPlayerPosition[0] === (oldPosition[0] + SPRITE_SIZE) && otherPlayerPosition[1] === oldPosition[1]) {
              return [oldPosition[0], oldPosition[1]]
            } else {
              if ((newPosition[0] - 100) >= otherPlayerPosition[0] -1) {
                return [oldPosition[0] + SPRITE_SIZE, oldPosition[1]];
              } else {
                if ((otherPlayerPosition[0] - 100) < newPosition[0] && ((otherPlayerPosition[1] + 100) > newPosition[1]) && (otherPlayerPosition[1] - 100) < newPosition[1]) {
                  return [oldPosition[0], oldPosition[1]]
                } else if ((otherPlayerPosition[0] - 100) < newPosition[0] && (newPosition[1] > (otherPlayerPosition[1] - 100) && newPosition[1] < otherPlayerPosition[1] - 100)) {
                  return [oldPosition[0], oldPosition[1]]
                } else {
                  return [oldPosition[0] + SPRITE_SIZE, oldPosition[1]];
                }
              }
            }
          } else {
            return [oldPosition[0], oldPosition[1]]
          }
        case 'NORTH':
          if (oldPosition[1] > 0) {
            if (otherPlayerPosition[0] === oldPosition[0] && otherPlayerPosition[1] === (oldPosition[1] - SPRITE_SIZE)) {
                return [oldPosition[0], oldPosition[1]]
            } else {
                if ((newPosition[1] + 100) <= otherPlayerPosition[1] + 1) {
                    return [oldPosition[0], oldPosition[1] - SPRITE_SIZE];
                } else {
                    if (newPosition[1] < (otherPlayerPosition[1] + 100) && ((otherPlayerPosition[0] + 100) > newPosition[0]) && (otherPlayerPosition[0] - 100) < newPosition[0]) {
                        return [oldPosition[0], oldPosition[1]]
                    } else if (newPosition[1] < (otherPlayerPosition[1] + 100) && (newPosition[0] > (otherPlayerPosition[0] - 100) && newPosition[0] < otherPlayerPosition[0] - 100)) {
                        return [oldPosition[0], oldPosition[1]]
                    } else {
                        return [oldPosition[0], oldPosition[1] - SPRITE_SIZE];
                    }
                }
            }
        } else {
            return [oldPosition[0], oldPosition[1]]
        }
        case 'SOUTH':
          if (oldPosition[1] < 600) {
            if (otherPlayerPosition[0] === oldPosition[0] && otherPlayerPosition[1] === (oldPosition[1] + SPRITE_SIZE)) {
                return [oldPosition[0], oldPosition[1]]
            } else {
                if ((newPosition[1] - 100) >= otherPlayerPosition[1] - 1) {
                    return [oldPosition[0], oldPosition[1] + SPRITE_SIZE];
                } else {
                    if ((newPosition[1] + 100) > otherPlayerPosition[1] && ((otherPlayerPosition[0] + 100) > newPosition[0]) && (otherPlayerPosition[0] - 100) < newPosition[0]) {
                        return [oldPosition[0], oldPosition[1]]
                    } else if ((newPosition[1] + 100) > otherPlayerPosition[1] && (newPosition[0] > (otherPlayerPosition[0] - 100) && newPosition[0] < otherPlayerPosition[0] - 100)) {
                        return [oldPosition[0], oldPosition[1]]
                    } else {
                        return [oldPosition[0], oldPosition[1] + SPRITE_SIZE];
                    }
                }
            }
        } else {
            return [oldPosition[0], oldPosition[1]]
        }
        default:
          return [oldPosition[0], oldPosition[1]];
      }
    }
    else {
      return [oldPosition[0], oldPosition[1]];
    }

  }

  render() {
    let { changePlayer, selectedPlayer } = this.props
    return (
      <div>
        <div id={selectedPlayer === "player1" ? "player-container": "player-inactive"}
          style={{
            top: this.state.position[1],
            left: this.state.position[0],
            backgroundPosition: '0 0',
          }}
          onClick={() => changePlayer("player1")}
        />
      </div>
    );
  }
}


