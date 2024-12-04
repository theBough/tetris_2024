function makeTophat(){
  activeHexomino = [81,82,100,101,102,103,0];
  for(let i = 0 ; i<activeHexomino.length-1; i++){
    grid[activeHexomino[i]].col ="#226F54"
  }
}

function topHatState(){
  //this will check to see what state the
  //top hat is in, and then rotate it.
  
  //index 6 tells us what state the tetromino is in
  console.log(activeHexomino[6])
  switch(activeHexomino[6]){
    case 0:
      moveZeroToOne();
      activeHexomino[6] +=1
    break;
    case 1:
      moveOneToTwo()
      activeHexomino[6] +=1
    break;  
    case 2:
      moveTwoToThree();
      activeHexomino[6] +=1
    break;
    case 3:
      moveThreeToZero();
      activeHexomino[6] =0
    break;  
  }
}
function moveZeroToOne(){
        //rotate theTopHat from zero to one
         activeHexomino[6] += 1000
        activeHexomino.sort(function(a,b){return a-b})
        activeHexomino[6] -= 1000
        activeHexomino[2] += 22
        activeHexomino[5] -= 41
  //console.log(activeHexomino)
        //turn the old spot grey
        grid[activeHexomino[2]-22].col = 100
        grid[activeHexomino[5]+41].col = 100
  
        //colour new location of hexomino
        for(let i = 0; i<activeHexomino.length-1;i++){
          grid[activeHexomino[i]].col = activeColour
        }          
}
function moveOneToTwo(){
   //rotate theTopHat from zero to one
        activeHexomino[6] += 1000
        activeHexomino.sort(function(a,b){return a-b})
        activeHexomino[6] -= 1000
  //console.log(activeHexomino)
        activeHexomino[0] += 18
        activeHexomino[5] -= 39
        //turn the old spot grey
        grid[activeHexomino[0]-18].col = 100
        grid[activeHexomino[5]+39].col = 100
        //colour new location of hexomino
        for(let i = 0; i<activeHexomino.length-1;i++){
          grid[activeHexomino[i]].col = activeColour
        }          
}
function moveTwoToThree(){
   //rotate theTopHat from zero to one
      
        activeHexomino[6] += 1000
        activeHexomino.sort(function(a,b){return a-b})
        activeHexomino[6] -= 1000
        
        activeHexomino[0] -= 19
        activeHexomino[3] += 38
  console.log(activeHexomino)
        //turn the old spot grey
        grid[activeHexomino[0]+19].col = 100
        grid[activeHexomino[3]-38].col = 100
        //colour new location of hexomino
        for(let i = 0; i<activeHexomino.length-1;i++){
          grid[activeHexomino[i]].col = activeColour
        }          
}
function moveThreeToZero(){
   //rotate theTopHat from zero to one
      
        activeHexomino[6] += 1000
        activeHexomino.sort(function(a,b){return a-b})
        activeHexomino[6] -= 1000
        
        activeHexomino[0] += 39
        activeHexomino[5] -= 18
        //turn the old spot grey
        grid[activeHexomino[0]-39].col = 100
        grid[activeHexomino[5]+18].col = 100
        //colour new location of hexomino
        for(let i = 0; i<activeHexomino.length-1;i++){
          grid[activeHexomino[i]].col = activeColour
        }          
}
