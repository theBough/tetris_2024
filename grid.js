grid = [];
function makeGrid(thisWidth, thisHeight) {
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 20; i++) {
      grid.push(new Block(i * 30, j*30, 30, 30, 100));
    }
  }
}
