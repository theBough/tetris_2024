let colourList = []
let activeColour
let activeHexamino = []
let myGravity;
let hitEdge = false;
let nameOfActiveHexo;

function setup() {
  createCanvas(600, 300);
  makeGrid()
  gravityOn()
  colourList.push("pink")
  colourList.push("rgb(192,255,255)")
  
  let index = Math.trunc(random(0,colourList.length))
  activeColour = colourList[index]
  if(index == 0){
    makeCross();
    nameOfActiveHexo = "cross"
  } else if(index == 1){
    makeTophat()
    nameOfActiveHexo = "topHat"
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
 
  myGravity = setInterval(moveActiveHexamino,500)
}
