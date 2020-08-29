export default interface PlayerState {
    position: number [];
    direction: string;
    playerTwoPosition: number[];
    playerTwoDirection: string;
 }
 
 export interface Player {
   position: number[], 
   getNewPosition: any,
   getDirection: any
 }

 export function defaultPlayerState(): PlayerState {
    return {
    position: [140, 140],
    direction: "",
    playerTwoPosition: [40, 40],
    playerTwoDirection: ""
    }
 }