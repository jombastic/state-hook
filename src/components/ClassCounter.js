import React, { Component } from "react";

class ClassCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }
    
    componentDidUpdate(prevProps, prevState) {
        document.title = `Clicked ${this.state.count} times`
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>Count {this.state.count} times</button>
            </div>
        );
    }
}

export default ClassCounter;