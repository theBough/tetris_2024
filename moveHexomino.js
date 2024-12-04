function moveActiveHexamino(){
  
  for(let i = 0; i<activeHexamino.length-1;i++){
    activeHexamino[i] +=1
    if(activeHexamino[i] % 20 == 19){
      hitEdge = true
    }
    grid[activeHexamino[i]-1].col = 100

  }
  
    for(let i = 0; i<activeHexamino.length-1;i++){
      grid[activeHexamino[i]].col = activeColour
    }    

}
function keyReleased(){
  if(key === 'w'){
    for(let i = 0; i<activeHexamino.length-1;i++){
     if(activeHexamino[i] < 20){
       //we are on the edge, and cant move up
       return 0;
     }
    }
    //move the tetromino up
   for(let i = 0; i<activeHexamino.length-1;i++){
     activeHexamino[i] -= 20
    }
    //true the old spot grey
    for(let i = 0; i<activeHexamino.length-1;i++){
      grid[activeHexamino[i]+20].col = 100
    } 
    //colour new location of tetromino
    for(let i = 0; i<activeHexamino.length-1;i++){
      grid[activeHexamino[i]].col = activeColour
    } 
  }
  if(key === 'a'){
    if(activeColour =="#226F54"){
      //the Tophat

      activeHexamino[2] -= 39
      activeHexamino[5] += 18

      //true the old spot grey
      grid[activeHexamino[2]+39].col = 100
      grid[activeHexamino[5]-18].col = 100
      //colour new location of tetromino
      for(let i = 0; i<activeHexamino.length-1;i++){
        grid[activeHexamino[i]].col = activeColour
      } 
    } else if(activeColour == "#DA2C38"){
      activeHexamino[5] -= 42

      //true the old spot grey
      grid[activeHexamino[5]+42].col = 100
      //colour new location of tetromino
      for(let i = 0; i<activeHexamino.length-1;i++){
        grid[activeHexamino[i]].col = activeColour
      } 
    }

  }
   if(key === 'q'){
     
      whatHexamino();
     /*
      if(activeColour == "pink"){
        activeTetromino[5] -= 38

        //true the old spot grey
        grid[activeTetromino[5]+38].col = 100
        //colour new location of tetromino
        for(let i = 0; i<activeTetromino.length;i++){
          grid[activeTetromino[i]].col = activeColour
        } 
   }*/
  }
}

function whatHexamino(){
  
  switch(nameOfActiveHexo){
      case "topHat":
        topHatState();
      break;
      case "cross":
        crossState();
      break;
  }//end of switch
}//end of function
