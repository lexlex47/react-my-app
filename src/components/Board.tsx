import React from 'react';
import Square from './Square';
import {InitBoard,FindWinner,GameStatus} from '../helper';

let Winner: string | null;
let Steps: number;
let MAX: number;
let MIN: number;
let Status: GameStatus;

type Props = {
              grid: number;
              IsAImode: boolean;
             }
type State = {
              squares: string[][] | null[][];
              xIsNext: boolean;
             }

class Board extends React.Component<Props, State> {

    constructor(props: Props){
        super(props);
        this.state = this.initState();
        Steps = this.props.grid * this.props.grid;
        MAX = this.props.grid;
        MIN = 0;
        Status = GameStatus.RUNNING;
    }

    initState = () => ({
      squares: InitBoard(this.props.grid),
      xIsNext: true,
    })

    handleReset = () => {
      Steps = this.props.grid * this.props.grid;
      this.setState(this.initState())
    }

    handleClick = (i: number, j: number) => {
      if(!Winner){
        if(this.state.squares[i][j] == null){
          //create a copy
          const squares = this.state.squares.slice();
          squares[i][j] = this.state.xIsNext ? 'X' : 'O';
          //run with the AImode
          if(this.props.IsAImode && Steps > 1){
            while(true){
              let rand_col = Math.floor(Math.random() * (MAX - MIN) + MIN);
              let rand_row = Math.floor(Math.random() * (MAX - MIN) + MIN);
              if(this.state.squares[rand_col][rand_row] == null){
                squares[rand_col][rand_row] = this.state.xIsNext ? 'O' : 'X';
                Steps -= 1;
                this.setState({
                  squares: squares,
                  xIsNext: this.state.xIsNext});
                Steps -= 1;
                return;
              }
            }
          }
          Steps -= 1;
          this.setState({
              squares: squares,
              xIsNext: !this.state.xIsNext});
        }
      }
    }

    renderSquare(i: number, j:number, k:string) {
      return <Square 
                value={this.state.squares[i][j]}
                onClick={() => this.handleClick(i,j)}
                key={k}
            />;
    }

    createBoard(){
      let board = [];
      for(let i = 0; i < this.props.grid; i++){
        let col = []
        for(let j = 0; j < this.props.grid; j++){
          let key = 'row' + i + 'col' + j;
          col.push(this.renderSquare(i,j,key));
        }
        board.push(<div className="board-row" key={'row' + i}>{col}</div>)
      }
      return board;
    }
  
    render() {
      Winner = FindWinner(this.state.squares,this.props.grid);
      let prints;
      if(Winner){
        prints = 'Winner is: ' + Winner;
      }
      else if(Winner == null && Steps == 0){
        prints = 'Drawn Game';
      }
      else{
        prints = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      console.log(Steps);
      return (
        <div>
          <div className="status">{prints}</div>
          {this.createBoard()}
          {
            (Winner || Steps == 0)
            ? <button className="btn" onClick={this.handleReset}>Play Again</button>
            : null
          }
        </div>
      );
    }
  }

  export default Board;