import React, { Component } from 'react'

export default class ClassMouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }

    logMouseposition = e => {
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.logMouseposition)
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.logMouseposition)
    }

    render() {
        return (
            <div>
                X - {this.state.x} Y - {this.state.y}
            </div>
        )
    }
}
