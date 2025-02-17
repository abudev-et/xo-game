import {cheakXColl, winsX} from './X-play.js';
import {cheakOColl, winsO} from './Y-play.js';

const xoButs = document.querySelectorAll(".xobut")
const winHtml = document.querySelector('.win')
const startBut = document.querySelector('.start')
export const winner = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
const xoCollu = []
let xo = ''
let x = 'x'
let o = 'o'
let xoBut;
export let buttonId = 0;

function startGame(){
  xoButs.forEach((xoButn)=>{
   xoButn.addEventListener("click",()=>{
      xoBut = document.getElementById(`${xoButn.id}`)
      playGame()
      
  })
})
}

function playGame(){
  //stop use dubleclick
    if(!xoCollu.includes(+xoBut.id)){
      if(xo === x) {
        xo = o
        xoBut.innerHTML = xo
        xoBut.classList.add('blue-button')
        buttonId = +xoBut.id
        xoCollu.push(+xoBut.id)
        cheakOColl()
        
      }else{
        xo = x
        xoBut.innerHTML = xo
        xoBut.classList.add('red-button')
        buttonId = +xoBut.id
        xoCollu.push(+xoBut.id)
        cheakXColl()
        
       }
    }  
  }


startBut.addEventListener('click',()=>{ 
  startGame()
  startBut.innerHTML = 'Started'
})

 export function gameOver(){
   xoButs.forEach((xoButn)=>{
    //if(!xoCollu.includes(+xoBut.id)){
      xoButn.addEventListener('click', (e)=>{
        xoBut = document.getElementById(`${xoButn.id}`)
        if(xoBut){
          e.preventDefault()
          return
        }
         /*playGame()
        buttonId = 0;
        xoBut.innerHTML = ''
        xoBut.classList.add('xobut')*/
        
    })
   //}
   })
   
   
  startBut.innerHTML = 'Restart'
  startBut.classList.add('restart')
}


