grid = [];
function makeGrid(thisWidth, thisHeight) {
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 20; i++) {
      grid.push(new Block(i * 20, j*20, 20, 20, 120));
    }
  }
}
