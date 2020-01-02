export default interface MapState {
    tiles: any;
 }

 export function defaultMapState(): MapState {
    return {
    tiles: []
    }
 }