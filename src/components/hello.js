import React ,{ Component} from 'react'

class Hello extends Component {
    constructor(props){
        super(props);
        this.increase=this.increase.bind(this);
    }
    state={
        age:Math.random(),
        user:{
            name:"Marwen",
            lasName:"Saidi",
        },
        arraytest:['a','b','c','d','e','f'],
    }
    decrement=()=>{
        this.setState({age:this.state.age - 1});
    }
    increase=()=>{
        this.setState({age:this.state.age * 2});
    }
    render() {
        return (
            <div>
                Hello from class Hello component
                <br />create with classes Methods 
                <br />{this.props.value}
                <p>{this.state.user.name +' '+ this.state.user.lasName}</p>
                <p>{this.state.arraytest[0]}</p>
                <h3>{this.state.age}</h3>
                <button 
                onClick={()=>{this.setState({age:this.state.age+1})}}>
                    + 
                </button>
                <button 
                onClick={this.decrement}>
                    - 
                </button>
                <button 
                onClick={this.increase}>
                   *2
                </button>
            </div>
        )
    }
}

export default Hello;