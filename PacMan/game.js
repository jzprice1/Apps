const game = document.getElementById("game");

// Simple 20×20 map
const map = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1],
  [1,2,1,1,1,2,1,1,2,1,1,2,1,1,2,1,1,1,2,1],
  [1,2,2,2,1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,1],
  [1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1],
  [1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1],
  [1,2,1,1,1,2,1,1,2,1,1,2,1,1,2,1,1,1,2,1],
  [1,2,2,2,1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,1],
  [1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1],
  [1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

// Player position
let player = { x: 1, y: 1 };

function draw() {
  game.innerHTML = "";
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      if (map[y][x] === 1) cell.classList.add("wall");
      if (map[y][x] === 2) cell.classList.add("dot");
      if (player.x === x && player.y === y) cell.classList.add("player");

      game.appendChild(cell);
    }
  }
}

function move(dx, dy) {
  const nx = player.x + dx;
  const ny = player.y + dy;

  if (map[ny][nx] !== 1) {
    player.x = nx;
    player.y = ny;

    if (map[ny][nx] === 2) {
      map[ny][nx] = 0; // eat dot
    }
  }

  draw();
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp") move(0, -1);
  if (e.key === "ArrowDown") move(0, 1);
  if (e.key === "ArrowLeft") move(-1, 0);
  if (e.key === "ArrowRight") move(1, 0);
});

draw();
