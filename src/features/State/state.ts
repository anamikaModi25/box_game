export default interface PlayerState {
    position: number [];
    direction: string
 }
 
 export interface Player {
   position: number[], 
   getNewPosition: any,
   getDirection: any
 }

 export function defaultPlayerState(): PlayerState {
    return {
    position: [0,0],
    direction: ""
    }
 }