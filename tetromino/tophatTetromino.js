function makeTophat(){
  activeTetromino = [81,82,100,101,102,103,0];
  for(let i = 0 ; i<activeTetromino.length-1; i++){
    grid[activeTetromino[i]].col = "rgb(192,255,255)"
  }
}

function topHatState(){
  //this will check to see what state the
  //top hat is in, and then rotate it.
  
  //index 6 tells us what state the tetromino is in
  console.log(activeTetromino[6])
  switch(activeTetromino[6]){
    case 0:
      moveZeroToOne();
      activeTetromino[6] +=1
    break;
    case 1:
      moveOneToTwo()
      activeTetromino[6] +=1
    break;  
    case "2":
      activeTetromino[6] +=1
    break;
    case "3":
      activeTetromino[6] =0
    break;  
  }
}
function moveZeroToOne(){
        //rotate theTopHat from zero to one
        activeTetromino[2] += 22
        activeTetromino[5] -= 41
        //turn the old spot grey
        grid[activeTetromino[2]-22].col = 100
        grid[activeTetromino[5]+41].col = 100
  
        //colour new location of hexamino
        for(let i = 0; i<activeTetromino.length-1;i++){
          grid[activeTetromino[i]].col = activeColour
        }          
}
function moveOneToTwo(){
   //rotate theTopHat from zero to one
        activeTetromino[6] += 1000
        activeTetromino.sort(function(a,b){return a-b})
        activeTetromino[6] -= 1000
        activeTetromino[0] += 41
        activeTetromino[5] -= 22
        //turn the old spot grey
        grid[activeTetromino[0]-41].col = 100
        grid[activeTetromino[5]+22].col = 100
        //colour new location of hexamino
        for(let i = 0; i<activeTetromino.length-1;i++){
          grid[activeTetromino[i]].col = activeColour
        }          
}
