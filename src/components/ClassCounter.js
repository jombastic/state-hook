import React, { Component } from "react";

class ClassCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            name: ''
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
        if (prevState.count !== this.state.count) {
            console.log('Updating doc title')
            document.title = `Clicked ${this.state.count} times`
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                <button onClick={this.incrementCount}>Count {this.state.count} times</button>
            </div>
        );
    }
}

export default ClassCounter;