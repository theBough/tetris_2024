activeTetromino = []
function setup() {
  createCanvas(600, 300);
  makeGrid()
  makeCross()
}
function draw() {
  background(220);
  for(let i=0 ; i<grid.length; i++){
    grid[i].display()
  }
}
