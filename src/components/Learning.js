import React, { Component } from "react";
class Learning extends Component{
    constructor(props){
        super(props)
        this.state = {
            fruits:[
                {name: 'Mango', weight: '120gm'},
                {name: 'Apple', weight: '110gm'},
                {name: 'Banana', weight: '100gm'}
            ]
        }
    }
    clickHandler = () => {
       this.setState({
            fruits:[
                {name: 'Apple', weight: '120gm'},
                {name: 'Samsung', weight: '110gm'},
                {name: 'Xiaomi', weight: '100gm'}
            ]
       });
    }
    render(){
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
                <h1>Title from props {this.props.title}</h1>
                <h2>Fruit name is {this.state.fruits[0].name}</h2>
                <h2>Fruit name is {this.state.fruits[1].name}</h2>
                <h2>Fruit name is {this.state.fruits[2].name}</h2>
            </div>
        );
    }
}
export default Learning