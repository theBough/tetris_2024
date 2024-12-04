function makeTophat(){
  activeHexamino = [81,82,100,101,102,103,0];
  for(let i = 0 ; i<activeHexamino.length-1; i++){
    grid[activeHexamino[i]].col = "rgb(192,255,255)"
  }
}

function topHatState(){
  //this will check to see what state the
  //top hat is in, and then rotate it.
  
  //index 6 tells us what state the tetromino is in
  console.log(activeHexamino[6])
  switch(activeHexamino[6]){
    case 0:
      moveZeroToOne();
      activeHexamino[6] +=1
    break;
    case 1:
      moveOneToTwo()
      activeHexamino[6] +=1
    break;  
    case "2":
      activeHexamino[6] +=1
    break;
    case "3":
      activeHexamino[6] =0
    break;  
  }
}
function moveZeroToOne(){
        //rotate theTopHat from zero to one
        activeHexamino[2] += 22
        activeHexamino[5] -= 41
        //turn the old spot grey
        grid[activeHexamino[2]-22].col = 100
        grid[activeHexamino[5]+41].col = 100
  
        //colour new location of hexamino
        for(let i = 0; i<activeHexamino.length-1;i++){
          grid[activeHexamino[i]].col = activeColour
        }          
}
function moveOneToTwo(){
   //rotate theTopHat from zero to one
        activeHexamino[6] += 1000
        activeHexamino.sort(function(a,b){return a-b})
        activeHexamino[6] -= 1000
        activeHexamino[0] += 41
        activeHexamino[5] -= 22
        //turn the old spot grey
        grid[activeHexamino[0]-41].col = 100
        grid[activeHexamino[5]+22].col = 100
        //colour new location of hexamino
        for(let i = 0; i<activeHexamino.length-1;i++){
          grid[activeHexamino[i]].col = activeColour
        }          
}
