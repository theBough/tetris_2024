function makeCross(){
  activeTetromino = [61,80,81,82,101,121];
  for(let i = 0 ; i<activeTetromino.length; i++){
    grid[activeTetromino[i]].col = "pink"
  }
}
