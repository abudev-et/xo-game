import {winner, buttonId, gameOver} from './app.js';

export const winsX = [[], [], [], [], [], [], [], []]
const winHtml = document.querySelector('.win')
const xoButs = document.querySelectorAll(".xobut")
export function cheakXColl(){
  for(let i = 0; i < winner.length; i ++){
      if(winner[0][i] === buttonId){
         winsX[0].push(buttonId)
      }
      if(winner[1][i] === buttonId){
        winsX[1].push(buttonId)
      }else if(winner[2][i] === buttonId){
        winsX[2].push(buttonId)
      }
      if(winner[3][i] === buttonId){
        winsX[3].push(buttonId)
      }
      if(winner[4][i] === buttonId){
        winsX[4].push(buttonId)
      }
      if(winner[5][i] === buttonId){
        winsX[5].push(buttonId)
      }
      if(winner[6][i] === buttonId){
        winsX[6].push(buttonId)
      }
      if(winner[7][i] === buttonId){
        winsX[7].push(buttonId)
      }
     
     
        if((winner[0][i] === winsX[0][i] && winner[0].length === winsX[0].length) || (winner[1][i] === winsX[1][i] && winner[1].length === winsX[1].length) || (winner[2][i] === winsX[2][i] && winner[2].length === winsX[2].length) || (winner[3][i] === winsX[3][i] && winner[3].length === winsX[3].length) || (winner[4][i] === winsX[4][i] && winner[4].length === winsX[4].length) || (winner[5][i] === winsX[5][i] && winner[5].length === winsX[5].length) || (winner[6][i] === winsX[6][i] && winner[6].length === winsX[6].length) || (winner[7][i] === winsX[7][i] && winner[7].length === winsX[7].length)){
          xGameWin()
        }
   }
}

function xGameWin(){
  winHtml.innerHTML = 'x win'
  gameOver()
}