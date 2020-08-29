import { MOVE_PLAYER, GETDIRECTION, GETDIRECTION2, MOVE_PLAYER2 } from "./def";

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
    public static getNewPosition2(position: number []) {
        return {
            type: MOVE_PLAYER2,
            payload: {
                position: position
            }
        }
    }
    public static getDirection2(direction: string) {
        return {
            type: GETDIRECTION2,
            payload: {
                direction: direction
            }
        }
    }
}