function isColumnClear(thisColumn){
  //this if checks to see if this column exists
  if(thisColumn > 19 || thisColumn <0){
    return 0
  }
  
  let stop = thisColumn+181;
  for(let i =thisColumn; i<stop; i += 20){
    if(grid[i].col == 100){
      return false;
    }
  }
  return true
}
function clearColumn(thisColumn){
  if(thisColumn > 19 || thisColumn <0){
    return 0
  }
  let stop = thisColumn+181;
  for(let i =thisColumn; i<stop; i += 20){
    grid[i].col = "white";
  }
}
