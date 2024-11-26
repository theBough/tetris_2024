function makeTophat(){
  activeTetromino = [100,81,82,102,101,103];
  for(let i = 0 ; i<activeTetromino.length; i++){
    grid[activeTetromino[i]].col = "rgb(192,255,255)"
  }
}
