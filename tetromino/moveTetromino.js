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
    for(let i = 0; i<activeTetromino.length;i++){
     if(activeTetromino[i] < 20){
       //we are on the edge, and cant move up
       console.log("edge")
       return 0;
     }
    }
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
  if(key === 'a'){
    if(activeColour == "rgb(192,255,255)"){
      //move the tetromino up

      activeTetromino[2] -= 39
      activeTetromino[5] += 18

      //true the old spot grey
      grid[activeTetromino[2]+39].col = 100
      grid[activeTetromino[5]-18].col = 100
      //colour new location of tetromino
      for(let i = 0; i<activeTetromino.length;i++){
        grid[activeTetromino[i]].col = activeColour
      } 
    } else if(activeColour == "pink"){
      activeTetromino[5] -= 42

      //true the old spot grey
      grid[activeTetromino[5]+42].col = 100
      //colour new location of tetromino
      for(let i = 0; i<activeTetromino.length;i++){
        grid[activeTetromino[i]].col = activeColour
      } 
    }

  }
   if(key === 'q'){
      if(activeColour == "rgb(192,255,255)"){
        //move the tetromino up

        activeTetromino[2] += 22
        activeTetromino[5] -= 41

        //true the old spot grey
        grid[activeTetromino[2]-22].col = 100
        grid[activeTetromino[5]+41].col = 100
        //colour new location of tetromino
        for(let i = 0; i<activeTetromino.length;i++){
          grid[activeTetromino[i]].col = activeColour
        }          
       }
      else if(activeColour == "pink"){
        activeTetromino[5] -= 38

        //true the old spot grey
        grid[activeTetromino[5]+38].col = 100
        //colour new location of tetromino
        for(let i = 0; i<activeTetromino.length;i++){
          grid[activeTetromino[i]].col = activeColour
        } 
   }
  }
}
