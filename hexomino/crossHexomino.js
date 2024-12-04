function makeCross(){
  activeHexomino = [61,80,81,82,101,121,0];
  for(let i = 0 ; i<activeHexomino.length-1; i++){
    grid[activeHexomino[i]].col = "#DA2C38"
  }
}
