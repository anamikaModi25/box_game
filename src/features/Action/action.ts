import { MOVE_PLAYER, GETDIRECTION, ADDTILES } from "./def";

export default class PlayerActionGenerator {
    
    public static getNewPosition(position: number []) {
        return {
            type: MOVE_PLAYER,
            payload: {
                position: position
            }
        }
    }
    public static getDirection(direction: string) {
        return {
            type: GETDIRECTION,
            payload: {
                direction: direction
            }
        }
    }
}