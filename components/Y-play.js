import {winner, buttonId, gameOver} from './app.js';

export const winsO = [[], [], [], [], [], [], [], []]
const winHtml = document.querySelector('.win')
export function cheakOColl(){
  
  for(let i = 0; i < winner.length; i ++){
      if(winner[0][i] === buttonId){
         winsO[0].push(buttonId)
      }
      if(winner[1][i] === buttonId){
        winsO[1].push(buttonId)
      }else if(winner[2][i] === buttonId){
        winsO[2].push(buttonId)
      }
      if(winner[3][i] === buttonId){
        winsO[3].push(buttonId)
      }
      if(winner[4][i] === buttonId){
        winsO[4].push(buttonId)
      }
      if(winner[5][i] === buttonId){
        winsO[5].push(buttonId)
      }
      if(winner[6][i] === buttonId){
        winsO[6].push(buttonId)
      }
      if(winner[7][i] === buttonId){
        winsO[7].push(buttonId)
      }
     
     
        if((winner[0][i] === winsO[0][i] && winner[0].length === winsO[0].length) || (winner[1][i] === winsO[1][i] && winner[1].length === winsO[1].length) || (winner[2][i] === winsO[2][i] && winner[2].length === winsO[2].length) || (winner[3][i] === winsO[3][i] && winner[3].length === winsO[3].length) || (winner[4][i] === winsO[4][i] && winner[4].length === winsO[4].length) || (winner[5][i] === winsO[5][i] && winner[5].length === winsO[5].length) || (winner[6][i] === winsO[6][i] && winner[6].length === winsO[6].length) || (winner[7][i] === winsO[7][i] && winner[7].length === winsO[7].length)){
          yGameWin()
        }
      
   }
}

function yGameWin(){
  winHtml.innerHTML = 'O win'
  gameOver()
}