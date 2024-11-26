let colourList = []
let activeColour
let activeTetromino = []
let myGravity;
let hitEdge = false;
function setup() {
  createCanvas(600, 300);
  makeGrid()
  gravityOn()
  colourList.push("pink")
  colourList.push("rgb(192,255,255)")
  
  let index = Math.trunc(random(0,colourList.length))
  console.log(index)
  activeColour = colourList[index]
  console.log(activeColour)
  if(index == 0){
    makeCross();
  } else if(index == 1){
    makeTophat()
  }
}
function draw() {
  background(220);
  for(let i=0 ; i<grid.length; i++){
    grid[i].display()
    
  }
  
  if(hitEdge){
    clearInterval(myGravity);
  }
}
function gravityOn(){
  //console.log("test")
  myGravity = setInterval(moveActiveTetromino,500)
}
