//win check function
export function FindWinner(squares: string[][] | null[][], grid: number) {
    
  let same_value = 1;
  // [ X X X ]
  // [ . . . ]
  // [ . . . ]
  for(let i = 0; i < grid; i++){
    same_value = 1;
    if(squares[i][0] != null){
      for(let j  = 1; j < grid; j++){
        if(squares[i][j] == squares[i][0]){
          same_value += 1;
        }
        if(same_value == grid){
          return squares[i][0];
        }
      }
    }
  }
  // [ X . . ]
  // [ X . . ]
  // [ X . . ]
  same_value = 1;
  for(let i = 0; i < grid; i++){
    same_value = 1;
    if(squares[0][i] != null){
      for(let j = 1; j < grid; j++){
        if(squares[j][i] == squares[0][i]){
          same_value += 1;
        }
        if(same_value == grid){
          return squares[0][i];
        }
      }
    }
  }
  // [ X . . ]
  // [ . X . ]
  // [ . . X ]
  same_value = 1;
  if(squares[0][0] != null){
    for(let i = 1; i < grid; i++){
      if(squares[i][i] == squares[0][0]){
        same_value += 1;
      }
      if(same_value == grid){
        return squares[0][0];
      }
    }
  }
  // [ . . X ]
  // [ . X . ]
  // [ X . . ]
  same_value = 1;
  if(squares[0][grid - 1] != null){
    for(let i = 1; i < grid; i++){
      if(squares[i][grid - 1 - i] == squares[0][grid - 1]){
        same_value += 1;
      }
      if(same_value == grid){
        return squares[0][grid - 1];
      }
    }
  }
  return null;
}

// load game board
export function InitBoard(grid: number) {
  let square = [];
  let squares = [];
  for(let i = 0; i < grid; i++){
    for(let j = 0; j < grid; j++){
      square.push(null);
    }
    squares.push(square);
    square = [];
  }
  return squares;
}

export enum GameStatus {
  RUNNING = 'running',
  FINISH = 'finish'
}