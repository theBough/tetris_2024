function makeTophat(){
  activeTetromino = [81,82,100,101,102,103];
  for(let i = 0 ; i<activeTetromino.length; i++){
    grid[activeTetromino[i]].col = "rgb(192,255,255)"
  }
}

function topHatState(){
  //this will check to see what state the
  //top hat is in, and then rotate it.
  
  //index 6 tells us what state the tetromino is in
  switch(activeTetromino[6]){
    case "0":
      
    break;
    case "1":
      
    break;  
    case "2":
      
    break;
    case "3":
      
    break;  
  }
}
