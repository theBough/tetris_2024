function moveActiveTetromino(){
  
  for(let i = 0; i<activeTetromino.length;i++){
    activeTetromino[i] +=1
    if(activeTetromino[i] % 20 == 19){
      hitEdge = true
    }
    grid[activeTetromino[i]-1].col = 100

  }
  
    for(let i = 0; i<activeTetromino.length;i++){
      grid[activeTetromino[i]].col = activeColour
    }    

}
function keyReleased(){
  if(key === 'w'){
    //move the tetromino up
   for(let i = 0; i<activeTetromino.length;i++){
     activeTetromino[i] -= 20
    }
    //true the old spot grey
    for(let i = 0; i<activeTetromino.length;i++){
      grid[activeTetromino[i]+20].col = 100
    } 
    //colour new location of tetromino
    for(let i = 0; i<activeTetromino.length;i++){
      grid[activeTetromino[i]].col = activeColour
    } 
  }
}
