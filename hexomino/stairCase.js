function makeStairCase() {
  activeHexomino = [62, 63, 81, 82, 100, 101, 0];
  for (let i = 0; i < activeHexomino.length - 1; i++) {
    grid[activeHexomino[i]].col =activeColour;
  }
}

function stairCaseState() {
  //this will check to see what state the
  //top hat is in, and then rotate it.

  //index 6 tells us what state the tetromino is in
  if (key == "q" || key == 'a') {
    switch (activeHexomino[6]) {
      case 0:
        moveZeroToOneStairCase();
        activeHexomino[6] += 1;
        break;
      case 1:
        moveOneToZeroStairCase();
        activeHexomino[6] = 0;
        break;
    }
  }  
}
function moveZeroToOneStairCase() {
  //rotate theTopHat from zero to one
  activeHexomino[6] += 1000;
  activeHexomino.sort(function (a, b) {
    return a - b;
  });
  activeHexomino[6] -= 1000;
  activeHexomino[0] -= 22;
  activeHexomino[1] -= 3;
  activeHexomino[2] -= 20;
  activeHexomino[3] -= 1;
  activeHexomino[4] -= 18;
  activeHexomino[5] += 1;
  //console.log(activeHexomino)
  //turn the old spot grey
  grid[activeHexomino[0] + 22].col = 100;
  grid[activeHexomino[1] + 3].col = 100;
  grid[activeHexomino[2] + 20].col = 100;
  grid[activeHexomino[3] + 1].col = 100;
  grid[activeHexomino[4] + 18].col = 100;
  grid[activeHexomino[5] - 1].col = 100;

  //colour new location of hexomino
  for (let i = 0; i < activeHexomino.length - 1; i++) {
    grid[activeHexomino[i]].col = activeColour;
  }
}
function moveOneToZeroStairCase() {
  //rotate theTopHat from zero to one
  activeHexomino[6] += 1000;
  activeHexomino.sort(function (a, b) {
    return a - b;
  });
  activeHexomino[6] += 1000;
  activeHexomino[0] += 22;
  activeHexomino[1] += 3;
  activeHexomino[2] += 20;
  activeHexomino[3] += 1;
  activeHexomino[4] += 18;
  activeHexomino[5] -= 1;
  //console.log(activeHexomino)
  //turn the old spot grey
  grid[activeHexomino[0] - 22].col = 100;
  grid[activeHexomino[1] - 3].col = 100;
  grid[activeHexomino[2] - 20].col = 100;
  grid[activeHexomino[3] - 1].col = 100;
  grid[activeHexomino[4] - 18].col = 100;
  grid[activeHexomino[5] + 1].col = 100;

  //colour new location of hexomino
  for (let i = 0; i < activeHexomino.length - 1; i++) {
    grid[activeHexomino[i]].col = activeColour;
  }
}
