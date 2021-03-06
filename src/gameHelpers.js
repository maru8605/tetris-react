export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear']));

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {

  // for para poder volver(no con forEach)
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. chequear donde esta el actual tetromino
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. chequear que los tetrominos se queden dentro del area de juego (altura)
          // mantenerse dentro del area de juegos
          !stage[y + player.pos.y + moveY] ||
          // 3. chequear que los tetrominos se queden dentro del area de juego (ancho)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. checkear si la celda esta limpia
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            'clear'
        ) {
          return true;
        }
      }
    }
  }
  // 5. si lo anterior es falso
  return false;
};







