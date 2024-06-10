import React, { Component } from "react";

class Walalang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
        this.clickMe = this.clickMe.bind(this);
    }
    clickMe(evt) {
        this.setState(curState => curState.num = curState.num + 1)
    }
    render() {
        const { num } = this.state;
        return (
            <div>
                <div>{ num }</div>
                <div>
                    <button onClick={this.clickMe}>Click me</button>
                </div>
            </div>
    )}
}

export default Walalang;