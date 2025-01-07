let colourList = []
let activeColour
let activeHexomino = []
let myGravity;
let hitEdge = false;
let nameOfActiveHexo;

function setup() {
  createCanvas(600, 300);
  makeGrid()
  gravityOn()
   colourList.push("#DA2C38")
  colourList.push("#226F54")
  colourList.push("yellow")
  colourList.push("blue")
  
  newHexomino();
}
function draw() {
  background(220);
  for(let i=0 ; i<grid.length; i++){
    grid[i].display() 
  }
  if(hitEdge){
    clearInterval(myGravity);
  }
  if(isColumnClear(19)){
    clearColumn(19)
  }
}
function newHexomino(){
  
  let index = Math.trunc(random(0,colourList.length))
  activeColour = colourList[index]
  if(index == 0){
    makeCross();
    nameOfActiveHexo = "cross"
  } else if(index == 1){
    makeTophat()
    nameOfActiveHexo = "topHat"
  } else if(index == 2){
    makeRectangle()
    nameOfActiveHexo = "rectangle"
  }else if(index == 3){
    makeStairCase()
    nameOfActiveHexo = "stairCase"
    
  }
}
function gravityOn(){
 
  myGravity = setInterval(moveActiveHexomino,500)
}
