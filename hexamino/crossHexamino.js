function makeCross(){
  activeHexamino = [61,80,81,82,101,121,0];
  for(let i = 0 ; i<activeHexamino.length-1; i++){
    grid[activeHexamino[i]].col = "pink"
  }
}
