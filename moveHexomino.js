let newHexominoTime = false;
let finishedHexomino = []
function moveActiveHexomino(){
  
  for(let i = 0; i<activeHexomino.length-1;i++){
    activeHexomino[i] +=1
    for(let j = 0; j<finishedHexomino.length; j++){
      if(activeHexomino[i] +1== finishedHexomino[j]){
        newHexominoTime = true
      } 
    }
    
    //check to see if it hits bottom
    if(activeHexomino[i] % 20 == 19){
      //hitEdge = true
      newHexominoTime = true
    }
    grid[activeHexomino[i]-1].col = 100

  }
    for(let i = 0; i<activeHexomino.length-1;i++){
      grid[activeHexomino[i]].col = activeColour
    }    
    if(newHexominoTime){
      for(let i = 0; i<activeHexomino.length-1;i++){
        finishedHexomino.push(activeHexomino[i])
      }
      newHexomino();
      newHexominoTime = false
      //console.log(finishedHexomino)
    }
}
function keyReleased(){
  if(key === 'w'){
    for(let i = 0; i<activeHexomino.length-1;i++){
     if(activeHexomino[i] < 20){
       //we are on the edge, and cant move up
       return 0;
     }
    }
    //move the tetromino up
   for(let i = 0; i<activeHexomino.length-1;i++){
     activeHexomino[i] -= 20
    }
    //true the old spot grey
    for(let i = 0; i<activeHexomino.length-1;i++){
      grid[activeHexomino[i]+20].col = 100
    } 
    //colour new location of tetromino
    for(let i = 0; i<activeHexomino.length-1;i++){
      grid[activeHexomino[i]].col = activeColour
    } 
  }
  if(key === 's'){
    for(let i = 0; i<activeHexomino.length-1;i++){
     if(activeHexomino[i] > 180){
       //we are on the edge, and cant move down
       return 0;
     }
    }
    //move the tetromino down
   for(let i = 0; i<activeHexomino.length-1;i++){
     activeHexomino[i] += 20
    }
    //true the old spot grey
    for(let i = 0; i<activeHexomino.length-1;i++){
      grid[activeHexomino[i]-20].col = 100
    }
    //colour new location of tetromino
    for(let i = 0; i<activeHexomino.length-1;i++){
      grid[activeHexomino[i]].col = activeColour
    }
  }
  if(key === 'a'){
    whatHexomino();
  }
   if(key === 'q'){
      whatHexomino()
   }
}

function whatHexomino(){
  
  switch(nameOfActiveHexo){
      case "topHat":
        topHatState();
      break;
      case "cross":
        crossState();
      break;
      case "rectangle":
        rectangleState();
      break;
      case "stairCase":
        stairCaseState();
      break;
  }//end of switch
}//end of function
