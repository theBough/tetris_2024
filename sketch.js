let activeTetromino = []
let myGravity;
let hitEdge = false;
function setup() {
  createCanvas(600, 300);
  makeGrid()
  makeCross()
  gravityOn()
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
