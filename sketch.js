function setup() {
  createCanvas(600, 300);
  makeGrid()
}

function draw() {
  background(220);
  for(let i=0 ; i<grid.length; i++){
    grid[i].display()
  }
}
