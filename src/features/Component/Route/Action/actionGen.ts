import { ADDTILES } from "../../../Action/def";

export default class MapActionGenerator {
    public static addTiles (tiles: any) {
        return {
            type: ADDTILES,
            payload: {
                tiles: tiles
            }
        }
    }
}