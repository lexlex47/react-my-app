import React, {Component} from 'react'
import Board from './Board';

const MAX_NUMBER = 10;
const MIN_NUMBER = 3;

type Props = {}
type State = {
              grid: number;
              IsAImode: boolean;
              IsValid: boolean;
            }

class Start extends Component<Props, State>{

    constructor(props: any){
        super(props);
        this.state = {
            grid: 0,
            IsAImode: false,
            IsValid: false
        }
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBoxchange = this.handleBoxchange.bind(this);
    }

    handleOnchange(e: React.ChangeEvent<HTMLInputElement>){
        this.setState({
            //conver to int
            grid: +e.target.value
        })
    }

    handleBoxchange = () =>{
        this.setState({
            IsAImode: !this.state.IsAImode
        })
    }

    handleSubmit = () =>{
        const {grid} = this.state;
        if(grid >= MIN_NUMBER  && grid <= MAX_NUMBER){
            this.setState({IsValid: true})
        }
        else
        {
            alert("Please input valid number: 3 - 10");
        }
    }

    InitGame(){
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <label>
                    Input Col & Row
                    <input 
                        type="number" 
                        value={this.state.grid} 
                        onChange={this.handleOnchange}
                    />
                </label><br/>
                <label>
                    Play With AI
                    <input 
                        type="checkbox"
                        onClick={this.handleBoxchange}/>
                </label>
                <br/>
                <input className="btn" type="submit" value="Start Game"/>
            </form>
        )
    }

    render(){
        if(this.state.IsValid){
            return(<Board grid={this.state.grid} IsAImode={this.state.IsAImode}/>);
        }
        else{
            return this.InitGame();
        }
    }
}

export default Start;