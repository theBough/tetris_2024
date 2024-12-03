let colourList = []
let activeColour
let activeTetromino = []
let myGravity;
let hitEdge = false;
let nameOfActiveTetro;

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
    nameOfActiveTetro = "cross"
  } else if(index == 1){
    makeTophat()
    nameOfActiveTetro = "topHat"
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
 
  myGravity = setInterval(moveActiveTetromino,500)
}
