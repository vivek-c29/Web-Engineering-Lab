import React,{Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={count : 0};
    }
    increment = () =>{
        this.setState({count:this.state.count+1});
    };

    decrement=()=>{
        this.setState({count:this.state.count-1});
    };

    reset=()=>{
        this.setState({count:0});
        
    }

    render(){
        return(
            <div className="container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFO2buUlXtsB9johyPOoPd71tqa2eZC7ItDw&s"></img>
                <h2 className="head">Sample Counter(Class Component)</h2>
                <span className="value">{this.state.count}</span>
                <div className="btns">
                <button className="btn" onClick={this.decrement}>Decrement</button>
                <button className="btn" onClick={this.reset}>Reset</button>
                <button className="btn" onClick={this.increment}>Increment</button>
                </div>
            </div>
        )
    }
}

export default Counter;
