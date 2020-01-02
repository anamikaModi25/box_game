export const ADDTILES = 'ADDTILES';
export type ADDTILES = typeof ADDTILES;
export interface AddTiles {
    type: ADDTILES;
    payload: {
        tiles: any;
    }
}
export type MapActions = 
AddTiles;