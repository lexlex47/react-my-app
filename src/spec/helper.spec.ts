import {FindWinner} from '../helper';

describe('Find winner function', () => {

  it('should X win same column', () => {
    const matrix = [
        ['X', 'X', 'X'],
        ['X', 'O', 'O'],
        ['O', 'X', 'O']
    ];
    const result = FindWinner(matrix, 9);
    expect(result).toEqual('X');
  });

  it('should O win same row', () => {
    const matrix = [
        ['O', 'X', 'X'],
        ['O', 'O', 'X'],
        ['O', 'X', 'O']
    ];
    const result = FindWinner(matrix, 9);
    expect(result).toEqual('O');
  });

  it('should X win left to right corner', () => {
    const matrix = [
        ['X', 'X', 'O'],
        ['O', 'X', 'O'],
        ['O', 'O', 'X']
    ];
    const result = FindWinner(matrix, 9);
    expect(result).toEqual('X');
  });

  it('should O win right to left corner', () => {
    const matrix = [
        ['X', 'X', 'O'],
        ['X', 'O', 'X'],
        ['O', 'X', 'O']
    ];
    const result = FindWinner(matrix, 9);
    expect(result).toEqual('O');
  });

});