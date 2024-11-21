function moveActiveTetromino(){
 
  for(let i = 0; i<activeTetromino.length;i++){
    activeTetromino[i] +=1
    grid[activeTetromino[i]-1].col = 100
  }
  for(let i = 0; i<activeTetromino.length;i++){
    activeTetromino[i] +=1
    grid[activeTetromino[i]].col = "pink"
  }
}
