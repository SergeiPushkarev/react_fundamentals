import React from 'react';

class ClassCounter extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            count : 0,
        }
        this.increment = this.incr.bind(this);
        this.decrement = this.decr.bind(this);
    }

    incr() {
        this.setState({count: this.state.count +1})
    }
    decr() {
        this.setState({count: this.state.count -1})
    }

    render(){
        return (
        <div>
            <h1>{this.state.count}</h1>
            <input type="text" />
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>
        )
    }
}

export default ClassCounter